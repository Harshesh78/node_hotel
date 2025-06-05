const mongoose = require('mongoose');
require('dotenv').config()

// const mongoURL="mongodb://localhost:27017/hotels"
const mongoURL=process.env.DB_URL
 mongoose.connect(mongoURL,{
     useNewUrlParser: true,
     useunifiedTopology:true,
 })
 const db=mongoose.connection;
 db.on('connected',()=>{
    try {
        console.log("Database connected")
        
    } catch (error) {
        console.log(error)
    }
 })
 module.exports=db;
















