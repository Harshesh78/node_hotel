const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    MobileNumber:{
        type:String,
        required:true,
        unique:true
    },
    work:{
        type:String,
        enum:['cheif','waiter','Manager'],
        required:true
    },

})

const Person= mongoose.model('Person',personSchema);
module.exports = Person;