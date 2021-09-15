const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "students.json"
);

const getStudentsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Student {
  constructor(id, name, batch) {
    this.id = id;
    this.name = name;
    this.batch = batch;
  }

  save() {
    getStudentsFromFile((students) => {
      students.push(this);
      fs.writeFile(p, JSON.stringify(students), (err) => {
        console.log(err);
      });
    });
  }
};
