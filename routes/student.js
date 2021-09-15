const express = require('express');
const router = express.Router();
const studentController = require('../controller/student');

router.post('/create-student',studentController.postCreateStudent);

router.get('/show-students',(req,res)=>{
    console.log('this students dont have mentor')
    res.send("this students dont have mentor")
}
);

router.post('/change-mentor/:stuId',(req,res)=>{
    const studentId = req.params.stuId;
    console.log(`changing mentor for student ${studentId}`)
    res.send(`changing mentor for student ${studentId}`)
}
);

module.exports = router;