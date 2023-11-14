const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: false},
    password: { type: String, required: true },
    address: { type: String, required: false, unique: false },
    mobile: { type: String, required: false, unique: false },
    dob: { type: String, required: false, unique: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
