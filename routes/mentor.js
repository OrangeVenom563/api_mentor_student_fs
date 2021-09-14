const express = require('express');
const router = express.Router();

router.get('/create-mentor',(req,res)=>{
    console.log('creating mentor')
    res.send("creating mentor")
}
);

router.get('/assign-students/:mentId',(req,res)=>{
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