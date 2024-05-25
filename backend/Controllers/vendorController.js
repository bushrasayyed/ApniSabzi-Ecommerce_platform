const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { sendEmail1 } = require("./mailController");
const dotenv = require("dotenv");
const otpGenerator = require("otp-generator");

dotenv.config();

//Adding vendor Route             <|====== ROUTE 1 ======|>
const addVendor = async (req, res) => {
  try {
    const { name, email, password,shopName,address } = req.body;

    // Validate request body
    await Promise.all([
      body("name", "Enter a valid name").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail().run(req),
      body("password", "Password must be at least 5 characters").isLength({
        min: 5,
      }),
      body("userType", "Invalid user type").isIn(["user","admin","vendor"]),
    ]);

    // Check if the email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry, a vendor with this email already exists" });
    }

    // Password hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      shopName,
      address,
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
      password: req.body.password,
    };
    await sendEmail1(user1.name, user1.email, user1.id,user1.password);

    // Send response after sending the email
    res.status(201).json({
      success: true,
      message: "Vendor added successfully",
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "Internal server error" });
    success: false;
    console.error("Error adding Vendor:", error);
  }
};


//fetching vendor Route             <|====== ROUTE 2 ======|>
const fetchVendor= async(req,res)=>{
    try {
        const vendors = await User.find({ userType: 'vendor' }, 'name email shopName address');
        res.json(vendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

//Deleting vendor Route             <|====== ROUTE 2 ======|>
const deleteVendor = async (req, res) => {
  try {
    // Find the vendor by ID and delete it
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ error: 'Failed to delete vendor' });
  }
}


module.exports = {addVendor, fetchVendor, deleteVendor};
