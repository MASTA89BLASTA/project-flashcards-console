// eslint-disable-next-line no-unused-vars
const fs = require('fs/promises');
const path = require('path');
const { EOL } = require('os');

class Module {
  static async topicsNames() {
    const topics = await fs.readdir(path.join('../topics'));

    return topics.map((topic) => topic.replace('.txt', ''));
  }

  static async getTopic(topicsName) {
    const topic = await fs.readFile(`../topics/${topicsName}.txt`, 'utf-8');
    return topic.split(EOL);
  }
}

module.exports = { Module };
