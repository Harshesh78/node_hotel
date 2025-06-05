const mongoose = require('mongoose');

const ManuSchma=  new mongoose.Schema({
     name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    test:{
        type:String,
        enum:["sweet","spicy","sour"],
        require:true
    },
    is_drinl:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        require:true
    },
    num_sales:{
        type:String,
        require:true
    },
})

const Menu= mongoose.model("Menu",ManuSchma)
module.exports=Menu;