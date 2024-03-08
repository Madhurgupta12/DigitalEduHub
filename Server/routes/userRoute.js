const express=require('express')
const router=express.Router();
const {registerController,loginController}=require("../controller/user");
router.post("/login",loginController)
router.post("/signup",registerController);
module.exports=router;