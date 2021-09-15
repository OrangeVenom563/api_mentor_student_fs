const Mentor = require('../models/mentor')

exports.postCreateMentor = (req, res) => {
    const id = req.body.mentId;
    const name = req.body.mentName;
    const years_exp = req.body.exp;
   
    const mentor = new Mentor(id,name,years_exp);
    mentor.save();
    res.send(`created new mentor ${id}`);
  };

  exports.postRemoveStud = (req,res)=>{
      Mentor.removeStudent(req.body.mentId,req.body.stuId)
      res.send('ok')
  }

  exports.postAddStudents = (req,res)=>{
      Mentor.addStudents(req.body.mentId,req.body.students)
      res.send('hmmm okay')
  }