//File Module

const fs = require('fs').promises; //что бы была обработка через очередь промисифиц
const { EOL } = require('os'); //для разных операционных систем
const path = require('path'); //для правильного отображения слэшей

class Module {
  static async topicsNames() {
    const topics = await fs.readdir(path.join('../topics'));
   console.log(topics.map((el) => el.replace('.txt', '').replaceAll("_", " "))) 
  }
}
Module.topicsNames();
