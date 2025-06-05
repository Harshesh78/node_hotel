const express = require('express');
const app = express();
const PORT = 8081;
const db = require('./db.js'); 

const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Assuming db.js is in the same directory




// Router Define
const personroutes = require('./routes/personroutes.js')
const menuroutes=require('./routes/menuroutes.js')
app.use("/person",personroutes)
app.use("/menu",menuroutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port :http://localhost:${PORT}`);
});