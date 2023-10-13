//File Module

const fs = require('fs').promises; // что бы была обработка через очередь промисифиц
const { EOL } = require('os'); // для разных операционных систем символ конца строки 
const path = require('path'); // для правильного отображения слэшей

class Module {
  static async topicsNames() {
    const topics = await fs.readdir(path.join('../topics'));
    return topics.map((el) => el.replace('.txt', '').replaceAll('_', ' '));
  }

  static async getTopic(topicsName) {
    const topic = await fs.readFile(`../topics/${topicsName}.txt`, 'utf-8');
    return topic.split(EOL);
  }
}
Module.topicsNames();
