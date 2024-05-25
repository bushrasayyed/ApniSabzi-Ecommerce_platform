const Order = require('../Models/orderModel');
const Product = require('../Models/productModel');

const orderSummary = async (req, res) => {
  const orderId = req.params.id;
  try {
    // Find the order by its ID
    const order = await Order.find(orderId, 'shippingAddress.fullName isDelivered totalPrice paymentMethod isPaid createdAt');
    // const order = await Orders.findById(orderId, 'shippingAddress.fullName isDelivered');

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    // Find the order by its ID
    const order = await Order.findById(orderId);
    // const order = await Orders.findById(orderId, 'shippingAddress.fullName isDelivered');

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
 
     res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    // Find the order by its ID
    let order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order's isDelivered and isPaid field
    order.isDelivered = req.body.isDelivered;    
    order.isPaid = req.body.isPaid;    


    // Save the updated order
    order = await order.save();

    // Return the updated order
    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const updateInventory=async(req, res)=>{
  try {
    const { products } = req.body; // Assuming products are sent in the request body
    
    // Loop through the products in the order
    for (const product of products) {
        const { productId, quantity } = product;
        
        // Find the product in the database
        const foundProduct = await Product.findById(productId);
        
        // If product not found, return 404 error
        if (!foundProduct) {
            return res.status(404).json({ message: `Product with ID ${productId} not found` });
        }

        // Check if there is sufficient inventory
        if (foundProduct.quantity < quantity) {
            return res.status(400).json({ message: `Insufficient inventory for product with ID ${productId}` });
        }

        // Update the inventory by subtracting the quantity sold
        foundProduct.quantity -= quantity;

        // Save the updated product
        await foundProduct.save();
    }

    // Send success response
    res.status(200).json({ message: 'Inventory updated successfully' });
} catch (error) {
    console.error('Error updating inventory:', error);
    res.status(500).json({ message: 'Internal server error' });
}

}

const orderCount = async(req,res)=>{
  try {
    const orderCount = await Order.countDocuments();
    res.json({ count: orderCount });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

};

module.exports = { orderSummary ,getOrder,updateOrder, updateInventory, orderCount};
