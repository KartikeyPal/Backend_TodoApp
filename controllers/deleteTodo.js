const Todo = require("../models/todo");

exports.deleteTodo = async (req,res)=>{
    try{
        const id = req.params.id;
        await Todo.findByIdAndDelete({_id:id});

        res.json({
            success:true,
            message:"deleted successfully"
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