const express = require('express');
const router = express.Router();
const mentorController = require('../controller/mentor');

router.post('/create-mentor',mentorController.postCreateMentor);

router.post('/assign-students/:mentId',(req,res)=>{
    const mentorId = req.params.mentId;
    console.log(`assigning student for mentor ${mentorId}`)
    res.send(`assigning student for mentor ${mentorId}`)
}
);

router.get('/view-students/:mentId',(req,res)=>{
    const mentorId = req.params.mentId;
    console.log(`student of mentor ${mentorId}`)
    res.send(`student of mentor ${mentorId}`)
}
);

module.exports = router;