//import the model
const Task1 = require("../models/task1");

//route handler for creating tasks
exports.createTask= async(req,res)=>{
    try{
        //extract from request body
        const{title,description,user,dueDate,isCompleted}=req.body;
        //create a new task and insert into Database
        const response=await Task1.create({title,description,user,dueDate,isCompleted});
        //send json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Task Created Successfully!'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
        {
            success:false,
            data:"Internal server error occurs",
            message:err.message,
        })
    }
}
