const fs = require('fs').promises;
const { Interface } = require('./interface.js');
const { Module } = require('./module.js');
// const inquirer = require("")

class Main {
  constructor(playerName = 'Игрок', score = 0) {
    this.playerName = playerName;
    this.score = score;
  }

  async QuizStart() {
    try {
      Interface.askPlayerName()
      .then((data) => this.playerName = data.player).catch(console.error);
      const topics = await Module.topicsNames();
      await Interface.topicLists(topics) {
        const res = await Interface.topicQuestions("Выберите тему: ");
        this.questionsLoop(strs);
      } 
    } catch (error) {
      console.error(error);
    }
  }
async questionsLoop(strs, index=0){
  if( index>=strs.length){
    return console.log(`${this.playerName} Вы ответили на все вопросы!\nВаши набранные очки:${this.score}`)
  }
}

}
