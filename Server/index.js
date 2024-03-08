const express=require('express');
const dotenv=require('dotenv');
const cors=require("cors");
const app=express();
dotenv.config();
const {connectDB}=require("./db/db")


app.use(express.json());
app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running at ${process.env.PORT}`);
})

connectDB();

