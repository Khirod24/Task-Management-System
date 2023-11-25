//import the model
const Task1 = require("../models/task1");

//route handler
exports.updateTask= async(req,res)=>{
    try{
        const {id}=req.params;
        const{isCompleted}=req.body;

        const task =await Task1.findByIdAndUpdate(
            {_id:id},
            {isCompleted}
        )

        res.status(200).json({
            success:true,
            data:task,
            message:`Task with id=${id} is completed `
        })
        console.log(task);
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error occurs",
            message:err.message,
        })
    }
}
