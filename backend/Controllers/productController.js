const { body, validationResult } = require("express-validator");
const Product = require("../Models/productModel");

const addProduct = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const product = new Product(req.body);

    // If an image is uploaded, set the image path
    if (req.file) {
      try {
        product.image = req.file.path;
      } catch (error) {
        console.log(error);
      }
    }

    // Save the product document
    const save = await product.save();
    res.json(save);
    // res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const viewProducts = async (req, res) => {
  const userId = req.params.id;
  try {
    // Retrieve all products from the database
    const products = await Product.find({ user:userId });

    // Return the products in the response
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const productCount = async(req,res)=>{
  try {
    const productCount = await Product.countDocuments();
    res.json({ count: productCount });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

};

const updateProductQuantity = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};


const deleteProduct=async(req,res)=>{
  try {
    // Find the product by ID and delete it
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }

}

// Search products
const searchProduct= async (req, res) => {
  try {
    const { q } = req.query;
    const regex = new RegExp(q, 'i'); // Case-insensitive regex for search
    const results = await Product.find({ $or: [{ name: regex }, { description: regex }] });
    res.json(results);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { addProduct, viewProducts,updateProductQuantity ,productCount ,deleteProduct, searchProduct};
