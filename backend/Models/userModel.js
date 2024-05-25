const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    shopName: {
      type: String, // Assuming OTP is stored as a string
      default: null, // Initial value of OTP is null
    },
    address: {
      type: String, // Assuming OTP is stored as a string
      default: null, // Initial value of OTP is null
    },
    otp: {
      type: String, // Assuming OTP is stored as a string
      default: null, // Initial value of OTP is null
    },
    date: {
      type: Date,
      default: Date.now,
    },
    userType: {
      type: String,
      enum: ["user", "admin", "vendor"], // Add enum for user types
      default: "user", // Default to 'user'
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
