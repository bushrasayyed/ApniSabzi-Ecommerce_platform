const User = require("../Models/userModel");
const Product = require("../Models/productModel");
const Order = require("../Models/orderModel");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { sendEmail, sendOtp } = require("./mailController");
const dotenv = require("dotenv");
const otpGenerator = require("otp-generator");

dotenv.config();

//User Registration Route             <|====== ROUTE 1 ======|>
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate request body
    await Promise.all([
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail().run(req),
      body("password", "Password must be at least 5 characters").isLength({
        min: 5,
      }),
      body("userType", "Invalid user type").isIn(["user", "admin"]),
    ]);

    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ userType: "admin" });
    if (existingAdmin && req.body.userType === "admin") {
      return res
        .status(400)
        .json({ error: "An admin user already exists. Signup not allowed." });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry, a user with this email already exists" });
    }

    // Password hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      userType: req.body.userType,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const data = {
      user: {
        id: newUser.id,
      },
    };
    const authtoken = jwt.sign(data, process.env.JWT_SECRET);

    const user1 = {
      name: req.body.name,
      email: req.body.email,
      id: newUser._id,
    };
    await sendEmail(user1.name, user1.email, user1.id);

    // Send response after sending the email
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Internal server error" });
    success: false;
    console.error("Error registering User:", error);
  }
};

//User Login                          <|====== ROUTE 2 ======|>
const userLogin = async (req, res) => {
  try {
    let success = false;
    //chk errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body; //destructring

    // Check if the email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("User not found");
    }

    // Compare the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      success: false;
      return res.status(401).json({ message: "Invalid password" });
    }

    // Verify JWT token
    const data = {
      user: {
        id: user.id,
        userType: user.userType,
      },
    };
    const authtoken = jwt.sign(data, process.env.JWT_SECRET);
    success: true;

    // Password is correct, send user details
    res.status(200).json({
      success: true,
      userData: {
        id: user.id,
        name: user.name,
        email: user.email,
        userType:user.userType,
        authtoken,
      },
    });
    // res.json("hello");
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Internal server error" });
    success: false;
    console.error("Error occure while login:", error);
  }
};

//Admin                               <|====== ROUTE 3 ======|>
const admin = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.userType === "admin") {
      return res.json(user);
    } else {
      return res.status(403).json({ error: "User is not an admin" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

//get User Detail                     <|====== ROUTE 4 ======|>
const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    // console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

//Reset password                      <|====== ROUTE 5 ======|>
const resetPassword = async (req, res) => {
  try {
    // const userId = req.params.id;
    const { email, newPassword } = req.body;

    // Find the user by userId
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: "User not found." });
    }

    // Check if the new password meets the minimum length requirement
    if (newPassword.length < 5) {
      return res.status(400).json({
        success: false,
        error: "Password must be at least 5 characters long.",
      });
    }

    // Generate a salt and hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    // Password reset successful
    return res
      .status(200)
      .json({ success: true, message: "Password reset successful." });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({
      success: false,
      error: "An error occurred. Please try again later.",
    });
  }
};

//Generate OTP                        <|====== ROUTE 6 ======|>
const otpGenerate = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email and select the name field
    const user = await User.findOne({ email }).select("name");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const name = user.name;

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
    });

    // Update user's record with the OTP and save it
    user.otp = otp;
    await user.save();

    // Send OTP to the user's email
    const result = await sendOtp(name, email, otp);
    // console.log(result);
    // Check if the OTP sending was successful
    res.status(201).json({
      success: true,
      message: "OTP send successfully",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ error: "An error occurred while sending OTP" });
  }
};

//verify OTP                          <|====== ROUTE 7 ======|>
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if OTP matches
    if (!user.otp || user.otp.trim() !== otp.trim()) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Clear the OTP from the user's record
    user.otp = null; // Assuming you have a field to store the OTP in your User model
    await user.save();

    // Respond with success message
    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while verifying OTP" });
  }
};

//customer Count                      <|====== ROUTE 8 ======|>
const customerCount = async (req, res) => {
  try {
    const customerCount = await User.countDocuments({ userType: "user" });
    res.json({ count: customerCount });
  } catch (error) {
    console.error("Error fetching customer count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//fetching vendor Route             <|====== ROUTE 9 ======|>
const fetchCustomers= async(req,res)=>{
  try {
      const customers = await User.find({}, 'name email phone address');
      res.json(customers);
    } catch (error) {
      console.error('Error fetching vendors:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const adminView = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();

    // Return the products in the response
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



//get all users
const getUsers = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const order = await Order.find(orderId,'shippingAddress.fullName shippingAddress.contactNo shippingAddress.address isPaid');
    // console.log(user);
    if (!order) {
      return res.status(404).send("User not found");
    }
    res.send(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = {
  userRegister,
  userLogin,
  admin,
  getUser,
  resetPassword,
  otpGenerate,
  verifyOTP,
  customerCount,
  fetchCustomers,
  adminView,
  getUsers
};
