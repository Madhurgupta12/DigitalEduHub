const express=require('express')
const User=require("../model/userModel")
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken");
const registerController=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(200).send({message:"User already exist",error:"not found"});

        }

            const {name,email,password}=req.body;
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
              const hashedpassword = await bcrypt.hash(password, salt);
                user = await User.create({ name, email, password: hashedpassword });




        res.status(201).send({message:"Registered successfully",success:true});

        }catch(error){
            console.log(error);
            res.status(500).send({
                sucess:false,
                message:`Registered not successfully ${error.message}`,
            })
        }
}
const loginController=async(req,res)=>{
    try{
       const {email,password}=req.body;
       if(!email||!password)
       {
        return res.status(422).json({error:"Enter all field"})
       }
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).send({message:"User not found",error:"not found"})
         }
         const isMatch =await bcrypt.compare(req.body.password,user.password);
         if(!isMatch){
             return res.status(404).send({error:"Invalid email or password"});
         }
         const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
        return res.status(200).send({message:"Login success",success:true,token});

    }
    catch(error){
        res.send({message:"Error"});
        console.log(error);
        return res.status(500).send({message:`Error in login ${error.message}`})
    }
}
module.exports={loginController,registerController};

