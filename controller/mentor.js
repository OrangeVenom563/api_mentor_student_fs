const Mentor = require('../models/mentor')
const Student = require('../models/student')

//using models to perform operations 

exports.postCreateMentor = (req, res) => {
    const id = req.body.mentId;
    const name = req.body.mentName;
    const years_exp = req.body.exp;
   
    const mentor = new Mentor(id,name,years_exp);
    mentor.save();
    res.json({message:`created new mentor ${id}`});
  };

  exports.postRemoveStudent = (req,res)=>{
      const mentorId = req.body.mentId;
      const studentId = req.body.stuId;
      Mentor.removeStudent(mentorId,studentId)
      res.send("removed")
  }

  exports.postAddStudents = (req,res)=>{
        const mentorId = req.body.mentId;
        const students = req.body.students;
        Mentor.addStudents(mentorId,students);
        Student.addMentor(mentorId,students);
        res.send('student added')
  }
  exports.getAllMentors = (req,res)=>{
    Mentor.getAll(mentors=> res.send(mentors))
  }