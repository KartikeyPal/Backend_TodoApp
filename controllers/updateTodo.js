//import the model

const Todo = require('../models/todo');

//define the route handler it is important

exports.updateTodo = async(req,res)=>{
    try{
       const id = req.params.id;
       const{title,description}=req.body;

       const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title,description,updatedAt:Date.now() },
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"updated successfully",
        })
    }
   
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}