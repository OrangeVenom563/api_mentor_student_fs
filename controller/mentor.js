const Mentor = require('../models/student')

exports.postCreateMentor = (req, res) => {
    const id = req.body.mentId;
    const name = req.body.mentName;
    const years_exp = req.body.exp;
   
    const mentor = new Mentor(id,name,years_exp);
    mentor.save();
    res.send(`created new mentor ${id}`);
  };