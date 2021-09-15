const Student = require('../models/student')
const Mentor = require('../models/mentor')

//create a new student
exports.postCreateStudent = (req, res) => {
    const id = req.body.stuId;
    const name = req.body.stuName;
    const batch = req.body.batch;
   
    const student = new Student(id,name,batch);
    student.save();
    res.send(`created student ${id}`);
  };

  //to get all students in file
  exports.getAllStudents = (req,res)=>{
      Student.getAll(students=> res.send(students))
  }

   //get students without mentor
  exports.getStudentsWithoutMentor = (req,res)=>{
      Student.getAll(students=>{
        const woMent = students.filter(student=>!student.hasOwnProperty("mentor"))
        res.send(woMent)
      })
  }

  exports.changeMentor = async (req,res)=>{
      const oldMent = req.body.mentId;
      const studentId = req.body.stuId;
      const newMentId = req.body.newMentId;
        await(Mentor.removeStudent(oldMent,studentId))
        await(Mentor.addStudents(newMentId,[studentId]))
        await Student.addMentor(newMentId,[studentId])
        res.send("mentor changed")
  }


  