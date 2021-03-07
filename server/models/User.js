const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
	email: {
    type: String,
    required: true,
    unique: true,
  },
	password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

module.exports = Users = mongoose.model("users", UserSchema);
