const express = require("express");
const User = require("../Models/Usermodels")
const router = express();

router.post("", async (req, res) => {
  try {
    const Register = await User.create(req.body)
    console.log("Register", Register)
    res.status(200).send(Register)
  } catch (err) {

  }
});

module.exports = router;
