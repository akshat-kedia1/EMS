const express=require("express"); 
const {
    loginController,
    registerController,
} = require("../controllers/userControllers");

//router object
const router=express.Router();

//routes
//POST || LOGIN user
router.post("/login",loginController);

//post || register user
router.post("/register",registerController);

module.exports= router;