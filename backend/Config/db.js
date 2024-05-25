const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
