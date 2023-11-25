//import the model
const Task1 = require("../models/task1");

//route handler
exports.deleteTask = async(req,res)=>{
    try{
        const{id}=req.params;
        await Task1.findByIdAndDelete(id);
        res.json({
            success:true,
            message:`Task with id=${id} is deleted`,
        })
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
