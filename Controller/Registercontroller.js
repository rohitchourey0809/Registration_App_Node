const express = require("express");
const User = require("../Models/Usermodels")
const router = express();

const Register = async (req,res) => {
  try {
    const userdata = await User.findOne({EMAIL:req.body.EMAIL})
    console.log("Registerfind---->", userdata)

    if(userdata){
      return res.status(400).send({message: "User Already Exists"})
    }else{
      const Register = await User.create(req.body)
      
      console.log("RegisterCreate----->", Register)
    }
     return res.status(200).send(userdata)
  } catch (err) {
     return res.status(400).send({message: err.message})
  }
}

module.exports = Register

// router.post("", async (req, res) => {
//   try {
//     const Register = await User.create(req.body)
//     console.log("Register", Register)
//     res.status(200).send(Register)
//   } catch (err) {

//   }
// });

// module.exports = router;
