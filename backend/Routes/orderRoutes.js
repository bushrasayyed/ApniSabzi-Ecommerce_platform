const express = require('express');
const Order = require('../Models/orderModel');
// const expressAsyncHandler = require('express-async-handler');
// const fetchuser = require('../middleware/fetchuser')

// POST route to create a new order
const orderRouter = express.Router();

orderRouter.post('/', async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      user,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt
    } = req.body;
    
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      user,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt
    });

    await order.save();
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all orders
orderRouter.get(
  '/:id',
  async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
  }
  });

module.exports = orderRouter;
