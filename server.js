const express = require("express");
const connect = require("./Config/db");

const Usercontroller = require("./Controller/Usercontroller");
const Registercontroller = require("./Controller/Registercontroller");
const Register = require("./Controller/Registercontroller");

const app = express();
app.use(express.json())



//Controllers
app.use("/users",Usercontroller)

app.post("/register",Register)

const PORT = 8080;

app.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log("Connection Done");
  } catch (err) {
    console.log(err);
    return err;
  }
});
