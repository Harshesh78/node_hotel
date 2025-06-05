const mongoose = require('mongoose');

// const mongoURL= 'mongodb://localhost:27017/hotels';



// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useunifiedTopology:true,
// })

// const db= mongoose.connection;
// db.on('connected', () => {
//     console.log('MongoDB connection successful');
// });
// db.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// module.exports = db;


const mongoURL="mongodb://localhost:27017/hotels"

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
















