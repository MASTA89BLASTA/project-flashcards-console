// eslint-disable-next-line no-unused-vars
const fs = require('fs').promises;
const inquirer = require('inquirer');

class Interface {
  constructor(mainTopics) {
    this.mainTopics = mainTopics;
  }

  static async topicQuestions(question) {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: question,
      },
    ]);
  }

  static async askPlayerName() {
    const playerName = [];
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'player',
          message: 'Введите своё имя: ',
        },
      ])
      .then((answer) => {
        playerName.push(answer.name);
      })
      .catch(console.error);
    return playerName;
  }

  static async topicLists(topics) {
    topics.forEach((topic, index) => {
      this.mainTopics.push(topic);
      console.log(this.mainTopics);
      console.log(`${index + 1}: ${topic}`);
    });
  }

  static async mainTopics() {
    await this.topics;
    return inquirer.prompt([
      {
        type: 'list',
        name: 'mainTopics',
        message: 'Выберите тему: ',
        choices: [
          { name: `${this.topics[0]}`, value: 0 },
          { name: `${this.topics[1]}`, value: 1 },
          { name: `${this.topics[2]}`, value: 2 },
        ],
      },
    ]);
  }
}

Interface.mainTopics();

module.exports = { Interface };
