const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
    {
      FIRSTNAME: { type: String, required: true },
      LASTNAME: { type: String, required: true },
      EMAIL: { type: String, required: true },
      PASSWORD: { type: String, required: true },
      ROLE: { type: String, required: true },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  const User = mongoose.model("users",userschema)

  module.exports = User;