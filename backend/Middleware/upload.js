const path = require("path");
const multer = require("multer");

// Set up disk storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder for uploads
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    let name = path.extname(file.originalname);
    cb(null, Date.now() + name);
  },
});

// Set up multer configuration
const uploads = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    // Check file types and filter only allowed types
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg"
    ) {
      // If the file type is allowed, accept it
      callback(null, true);
    } else {
      // If the file type is not allowed, reject it with an error message
      callback(new Error("Only JPG, PNG, JPEG files are allowed"));
    }
  },
  limits: {
    // Set file size limit to 2MB
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = uploads;
