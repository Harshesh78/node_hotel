const LocalStrategy=require('passport-local').Strategy
const passport = require('passport');
const Person = require('../models/personmodel.js');


passport.use(new LocalStrategy(async (USERNAME, password, done) => {
    try {
        
        const user= await Person.findOne({username:USERNAME})
        if(!user)
            return done(null ,false,({message:"Invalied Username"}))
        const isPassword= user.password === password ? true:false;
        if(isPassword){
            return done(null,user)
        }
        else{
            return done (null,false,({message:"Invalied Password"}))
        }
    } catch (error) {
       return done (error)
    }
}))

module.exports=passport;