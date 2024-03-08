const express = require('express');
const Team =require("../model/teamModel");
const uuid = require('uuid')
const Control=require("../middleware/middleware")
function generateFourDigitCode() {
    // Generate a random number between 0 and 9999
    let code = Math.floor(Math.random() * 10000);

    // Ensure the code has exactly 4 digits
    code = code.toString().padStart(4, '0');

    return code;
}
const createController=async (req,res)=>{
        
    const team=new Team({
        code:generateFourDigitCode(),
        name:req.body.name,
        members:[]
    })

    try{
   const tt=await team.save();
   const cc=await Team.findOne({name:req.body.name});
   return res.status(200).json({message:cc.code,id:cc._id});
    }
    catch(err)
    {
return res.status(500).json({message:err.message});
    }
   

}

const joinController=async(req,res)=>{
    //console.log(req.user);
    try{
        const ff=await Team.findOne({code:req.body.code})
        const members=ff.members||[];
      if(ff)
      {
        const value=req.user._id;
        const check = members.find(value => value === true);
        if(check!=null)
        {
            ff.members.push(req.user._id);
            await Team.findByIdAndUpdate(ff._id,{members})
            return res.status(200).json({success:"true"});
        }
        else
        {
            return res.status(200).json({"message":"user already exist"});
        }
      }
      else
      {
        console.log(req.user.name);
        console.error(err);
        res.status(500).json({ message: "Team not found" });
      }



    }
    catch(err)
    {
        return res.status(500).json({message:err.message});

    }


}
module.exports = {createController,joinController};