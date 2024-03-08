const express=require("express")
const mongoose=require("mongoose");
const User=require("./userModel")
const teamSchema=new mongoose.Schema({

    code: {
        type:String,
        required: true
    },

    name:{
      type:String,
    required: true
    },
    members:[
        {
         type: mongoose.Schema.Types.ObjectId,//refernce to user model
        ref: 'user'  
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
      }

    
})

const Team=mongoose.model("team",teamSchema);
module.exports=Team;
