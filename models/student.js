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

  //creates new student
  save() {
    getStudentsFromFile((students) => {
      students.push(this);
      fs.writeFile(p, JSON.stringify(students), (err) => {
        console.log(err);
      });
    });
  }

  //assigns mentor to students
  static addMentor(mentId,studsToAddMentor) {

    getStudentsFromFile(students => {
    const updatedStudents = students.map(stud=>
      {
        if(studsToAddMentor.indexOf(stud.id) != -1) stud.mentor = mentId 
        return stud;
      }
    )
    
    fs.writeFile(p, JSON.stringify(updatedStudents), (err) => {
        console.log(err);
      });
    });
  }
};
