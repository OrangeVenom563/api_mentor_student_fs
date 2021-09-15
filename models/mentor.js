const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "mentors.json"
);

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
    this.years_exp = exp
  }

  save() {
    getMentorsFromFile((mentors) => {
      mentors.push(this);
      fs.writeFile(p, JSON.stringify(mentors), (err) => {
        console.log(err);
      });
    });
  }
};
