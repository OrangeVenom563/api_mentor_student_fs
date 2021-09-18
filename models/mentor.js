const fs = require("fs");
const path = require("path");

//path for accessing file
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "mentors.json"
);

//gets file content
const getMentorsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Mentor {
  constructor(id, name, exp) {
    this.id = id;
    this.name = name;
    this.years_exp = exp;
  }

  //create new mentor
  save() {
    getMentorsFromFile((mentors) => {
      mentors.push(this);
      console.log(mentors);
      fs.writeFile(p, JSON.stringify(mentors), (err) => {console.log(err)});
    });
  }

  //removing student from existing mentor to add to new mentor
  static removeStudent(mentId, stuId) {
     getMentorsFromFile((mentors) => {
      const idx = mentors.findIndex(ment => ment.id == mentId);
      
      if(idx==-1){
        console.log("mentor not found cannot complete request")
        return ;
      }
      const stuRemoved = mentors[idx].students.filter((stu) => stu !== stuId);
      mentors[idx].students = stuRemoved;
      fs.writeFileSync(p, JSON.stringify(mentors), (err) => {console.log(err)}); 
    });
  }

  //adding one or more students to a mentor
  static addStudents(mentId, students) {

    getMentorsFromFile((mentors) => {
      const idx = mentors.findIndex((ment) => ment.id == mentId);

      if(idx==-1){
        console.log("mentor not found cannot complete request")
        return ;
      }
      
      if (!mentors[idx].students){ mentors[idx].students = []};
      mentors[idx].students.push(...students);

      fs.writeFile(p, JSON.stringify(mentors), (err) => {console.log(err)});
    });
  }
  
  //gets all the mentors
  static getAll(cb){
    getMentorsFromFile(cb)
 }
};
