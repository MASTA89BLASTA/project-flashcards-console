// eslint-disable-next-line no-unused-vars
const path = require('path');
const { EOL } = require('os');
const inquirer = require('inquirer');

class Interface {
  static async topicQuestions(question) {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: question,
      },
    ]);
  }

  static async topicLists(topics) {
    topics.forEach((topic, index) => {
      console.log(`${index + 1}: ${topic}`);
    });
  }
}

module.exports = { Interface };
