const express=require('express');
const dotenv=require('dotenv');
const cors=require("cors");
const app=express();
dotenv.config();
const userRoute=require("./routes/userRoute");
const teamRoute=require("./routes/teamRoute");
const {connectDB}=require("./db/db")

app.use(cors());
app.use(express.json());

app.use("/api",userRoute);
app.use("/api/user",teamRoute);

app.listen(process.env.PORT,(req,res)=>{
    console.log(`server is running at ${process.env.PORT}`);
})

connectDB();

