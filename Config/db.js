const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rohit1995chourey:rohit321@cluster0.vgg7xd5.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
