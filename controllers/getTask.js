//import the model
const Task1 =require("../models/task1");

//route handler
exports.getTask= async(req,res)=>{
    try{
        //fetch all tasks from database
        const tasks= await Task1.find({});
        console.log(tasks);

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:tasks,
                message:'All assigned tasks are fetched from database'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error occurs'
        })
    }
}

exports.getTaskById=async(req,res)=>{
    try{
        //extract tasks basis on id
        const {id} = req.params.id;
        const task = await Task1.findById({_id:id})
        
        //when data for given id is not found
        if(!task){
            return res.status(404).json({
                success:false,
                message:"No task found with given Id",
            })
        }
        //data for given id is found
        res.status(200).json({
            success:true,
            data:task,
            message:`Task with id=${id} is successfully fetched!`
        })
        console.log(task);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error occurs",
        });

    }
}
