//import the model
const { response } = require('express');
const Todo = require('../models/todo');

//define the route handler it is important

exports.getTodo = async(req,res)=>{
    try{
       //fetch all todo items from database
       const Todos = await Todo.find({});
       //response
       res.status(200).json({
        success:true,
        data:Todos,
        message:"entire data is fetched",
       })
    }
    catch(err){
       console.error(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:"server error",
       })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
      //extract Todo items by ID
      const  id=  req.params.id;
      const todo = await Todo.findById({ _id : id });

      if(!todo){
        return res.status(404).json({
            success:false,
            message:"No such data is found by given id", 
        })
      }
      res.status(200).json({
        success:true,
        data:todo,
        message:`todo by id: ${id} is fetched`,
      })
    }
    catch(err){
       console.error(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:" server error",
       })
    }
}