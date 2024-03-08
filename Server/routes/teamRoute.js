const express= require('express');
const router=express.Router();
const {createController,joinController} =require("../controller/team")
const Control =require("../middleware/middleware")
router.use(Control) 
router.post("/create",createController);
router.post("/join",joinController)

module.exports = router;