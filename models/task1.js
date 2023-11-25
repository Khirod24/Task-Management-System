const mongoose = require('mongoose')

const taskSchema1= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50,
    },
    user:{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },

 });

 module.exports= mongoose.model("Task",taskSchema1);