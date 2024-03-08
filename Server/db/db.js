const mongoose=require("mongoose");

 const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    
    });
    mongoose.connection.on('connected',()=>{
    console.log('Connected Established to Database');
    });
    
    mongoose.connection.on('error',(err)=>{
    console.log('error connection',err);
    })
}
module.exports = {
   connectDB
  };