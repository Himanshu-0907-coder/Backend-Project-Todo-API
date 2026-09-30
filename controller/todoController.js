//Importing Todo from models for defining api

import User from "../models/Todo.js";

//POST api
export const createUser = async (req,res)=>{
    try{
        const {title,description} = req.body;

        const todo = await User.create({
            title,
            description
        });

        res.status(201).json({
            success:true,
            message:"User have created Task",
            todo
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message:"Faield to create",
            error: error.message
        })
    }
}

//get api
export const getUser = async (req,res)=>{
    try{
        const todo = await User.find();
        res.json(todo); 
    }catch(error){
        res.status(500).json({
            message:"Failed to load",
            error
        })
    }
}
//Put api
export const updateTodo = async (req,res)=>{
    try{
        const { id } = req.params;

        const todo = await User.findByIdAndUpdate(id,req.body,{
            new: true,
            overwrite: true
        });
        res.json({
            success:true,
            message: "Updated successfully",
            data: todo
        })
        if(!todo){
            return res.status(404).json({
                message: "Todo not found"
            });
        }
    }catch(error){
        res.status(500).json({
            message:"Error fetching message",error
        })
    }
}
//Patch API
export const updatePatchTodo = async(req,res)=>{
    try{
        const { id } = req.params;

        const updateTodo = await User.findByIdAndUpdate(id,req.body,{
            new: true
        });

        res.status(201).json({
            success: true,
            message: "Updated Successfully",
            data: updateTodo
        })
    }catch(error){
        res.status(500).json({message:'Error in updating',error});
    }
}
//Delete API
export const deleteTodos = async(req,res)=>{
    try{
        const { id } = req.params;

        const delteTodo = await User.findByIdAndDelete(id);
        if(!delteTodo){
            return res.status(404).json({
                message:"User not found",
                error
            })
        }
        res.status(201).json({
            success:true,
            message:"Todods delete successdully",
            data:delteTodo
        })
    }catch(error){
        res.status(500).json({
            message:"Failed to delte",
            error
        })
    }
}