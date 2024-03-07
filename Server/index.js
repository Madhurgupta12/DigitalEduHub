const express=require('express');
const dotenv=require('dotenv');
const app=express();
dotenv.config();

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running at ${process.env.PORT}`);
})

