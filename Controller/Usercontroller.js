const express = require("express");
const User = require("../Models/Usermodels");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const userdata = await User.find();
    console.log("Userdata", userdata);
    return res.status(200).send(userdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userdata = await User.findById(req.params.id);
    console.log("Userdata", userdata);
    return res.status(200).send(userdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
// Below is an example of an Express route that should not use lean().
// As a general rule of thumb, GET routes are good candidates for lean() in a RESTful API.
// On the other hand, PUT, POST, etc. routes generally should not use lean().
router.put("/:id", async (req, res) => {
  try {
    const userdata = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    ).exec();
    console.log("Userdata", userdata);
    return res.status(200).send(userdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const userdata = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    ).exec();
    console.log("Userdata", userdata);
    return res.status(200).send(userdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
    try {
      const userdata = await User.find(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      ).exec();
      console.log("patchdata", userdata);
      return res.status(200).send(userdata);
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  });

router.get("", async (req, res) => {
  try {
    const userdata = await User.create(req.body);
    console.log("Createdata", userdata);
    return res.status(200).send(userdata);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
