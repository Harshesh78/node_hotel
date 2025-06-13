const express = require('express');
const app = express();
const db = require('./db.js'); 
require('dotenv').config()
const passport = require('./auth/auth.js')



const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(passport.initialize())
const localAuthmiddleware=passport.authenticate('local',{session:false})

app.get("/",(req,res)=>{
    res.send("Welcome to Hotel")
})
const PORT=process.env.PORT


// Router Define
const personroutes = require('./routes/personroutes.js')
const menuroutes=require('./routes/menuroutes.js');
app.use("/person" , localAuthmiddleware,personroutes)
app.use("/menu",menuroutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port :http://localhost:${PORT}`);
});