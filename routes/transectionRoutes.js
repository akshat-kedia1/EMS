const express=require("express"); 
const { addTransection, getAllTransection } = require("../controllers/transectionCtrl");

//router object
const router=express.Router();

//routes
// add transaction post method
router.post("/add-transection",addTransection)


// get transactions
router.get("/add-transection",getAllTransection)


module.exports= router;