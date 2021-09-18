const express = require('express')
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello from express')
})

app.use('/student',require('./routes/student'))

app.use('/mentor',require('./routes/mentor'))

app.use(require('./controller/error'));

app.listen(5000,()=>console.log('server listerning to port 3000'))