const razorpay = require("razorpay");
const User = require("../Models/userModel");
const dotenv = require("dotenv");

const instance = new razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET,
});

/**Route 1************************************Checkuot******************/
const handleCheckout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({
      success: false,
      error: "Error processing order",
    });
  }
};

/**Route 2****************************************Payment verifation*************/
const handlePaymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(body)
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      // Get user from wherever it's available
      const user = req.user; // Assuming user is available in the request object

      // Assuming Payment is a Mongoose model
      await Payment.create({
        user,
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      console.error("Error creating payment record:", error);
      res
        .status(500)
        .json({ success: false, error: "Error creating payment record" });
    }
  } else {
    res
      .status(400)
      .json({ success: false, error: "Signature verification failed" });
  }
};

/**Route 3 ***************************getAPI********************/
const handleGetKey = (req, res) => {
  return res.status(200).json({ key: process.env.KEY });
};

module.exports = { handleCheckout, handleGetKey, handlePaymentVerification };
