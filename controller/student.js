const Student = require('../models/student')

exports.postCreateStudent = (req, res) => {
    const id = req.body.stuId;
    const name = req.body.stuName;
    const batch = req.body.batch;
   
    const student = new Student(id,name,batch);
    student.save();
    res.send(`created student ${id}`);
  };