const express = require('express');
const router = express.Router();

router.get('/create-student',(req,res)=>{
    console.log('creating student')
    res.send("creating student")
}
);

router.get('/show-students',(req,res)=>{
    console.log('this students dont have mentor')
    res.send("this students dont have mentor")
}
);

router.get('/change-mentor/:stuId',(req,res)=>{
    const studentId = req.params.stuId;
    console.log(`changing mentor for student ${studentId}`)
    res.send(`changing mentor for student ${studentId}`)
}
);

module.exports = router;