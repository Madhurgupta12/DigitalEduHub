const jwt=require('jsonwebtoken')
const User=require("../model/userModel");
 const Control=(req,res,next)=>{

    try{
        const { authorization } =req.headers;
        //authorization =Bearer efunridvlignr
        if(! authorization ){
           return res.status(401).send({error:"you must be logged in"});
        }
       const token= authorization.replace("Bearer ","");
       jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        

        if(err)
        {
            return res.status(401).json({error:"you must be logged in"});
        }
        const { id }=payload;
        console.log(id);
        User.findById(id).then(userdata=>{
            
            userdata.password=undefined;
            req.user=userdata;
          

            next();
        })
    })
    
}
catch(err){
    
    return res.status(500).send({message:"Auth1 failed",success:err})
}
}
module.exports=Control