import mongoose from "mongoose";
import Story from '../models/storyContent.js';

const getStories=async(req,res)=>{
    try{
        const story=await Story.find();
        res.status(200).json(Story);
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}

const createStory=async(req,res)=>{
    const body=req.body;
    const newStory=new Story({
        ...body
    })
    try{
        Story.save();
        res.status(201).json(newStory);
    }
    catch(err){
        res.status(409).json({message:err.message});
    }
}
export {getStories,createStory};