const mongoose = require('mongoose');
const bcrypt= require('bcrypt')


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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },

})
personSchema.pre('save',async function(next){
    const person=this;
    if(!person.isDirectModified('password'))return(next);
    try {
        const salt=await bcrypt.genSalt(10);
        const hashpassword= await bcrypt.hash(person.password,salt);
        person.password=hashpassword
        next()
        
    } catch (error) {
         return next(error)
    }
})
personSchema.methods.comparePassword=async function(userpassword){
    try {
        const isMatch= await bcrypt.compare(userpassword,this.password)
        return isMatch;
    } catch (error) {
        return(error)
    }
}

const Person= mongoose.model('Person',personSchema);
module.exports = Person;