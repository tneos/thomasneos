const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    maxLength: 200,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
