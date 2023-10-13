// eslint-disable-next-line no-unused-vars
const { Interface } = require('./interface');
const { Module } = require('./module');

class Main {
  constructor(playerName = 'Игрок', score = 0) {
    this.name = playerName;
    this.score = score;
  }

  async quizStart() {
    try {
      const topics = await Module.topicsNames();
      await Interface.topicLists(topics);
      const res = await Interface.topicQuestions('Выберите тему: ');
      const chosentopic = topics[res.answer - 1];
      const strs = await Module.getTopic(chosentopic);
      this.questionsLoop(strs);
    } catch (error) {
      console.error(error);
    }
  }

  async questionsLoop(strs, index = 0) {
    if (index >= strs.length) {
      return console.log(
        `${this.name} Вы ответили на все вопросы!\nВаши набранные очки: ${this.score}`
      );
    }

    const question = strs[index];
    try {
      const res = await Interface.topicQuestions(`${question}\nВаш ответ: `);
      const corrAns = strs[index + 1];
      if (res.answer.trim().toLowerCase() === corrAns.trim().toLowerCase()) {
        this.score += 3;
        console.log('Верно! 👍');
      } else {
        console.log('Неверно! 👎');
      }
      this.questionsLoop(strs, index + 3);
    } catch (error) {
      console.error(error);
    }
  }
}

/* async function getUserNumber() {
  const userName = await Interface.askPlayerName();
  await console.log(userName);
  return userName;
} */

const starter = new Main();
starter.quizStart();

