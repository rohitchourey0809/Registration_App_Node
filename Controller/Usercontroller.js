
const express = require("express");
const User = require("../Models/Usermodels");
const router = express.Router()



router.get("",async(req,res)=>{
    try{
        const userdata = await User.find();
        console.log("Userdata",userdata)
        return res.status(200).send(userdata)
       }catch(err){
        return res.status(400).send({ message: err.message });
    }
   
})

router.get("/:id",async(req,res)=>{
    try{
        const userdata = await User.findById(req.params.id);
        console.log("Userdata",userdata)
        return res.status(200).send(userdata)
       }catch(err){
        return res.status(400).send({ message: err.message });
    }
   
})
router.put("/:id",async(req,res)=>{
    try{
        const userdata = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{
            new : true,
        }).lean().exec();
        console.log("Userdata",userdata)
        return res.status(200).send(userdata)
       }catch(err){
        return res.status(400).send({ message: err.message });
    }
   
})
router.patch("/:id",async(req,res)=>{
    try{
        const userdata = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{
            new : true,
        }).lean().exec();
        console.log("Userdata",userdata)
        return res.status(200).send(userdata)
       }catch(err){
        return res.status(400).send({ message: err.message });
    }
   
})

router.get("",async(req,res)=>{
    try{
        const userdata = await User.create(req.body);
        console.log("Userdata",userdata)
        return res.status(200).send(userdata)
       }catch(err){
        return res.status(400).send({ message: err.message });
    }
   
})


module.exports = router;
