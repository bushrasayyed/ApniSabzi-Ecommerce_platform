const router = require("express").Router();
const upload = require("../Middleware/upload");
const fetchuser = require("../Middleware/fetchUser");

const {
  userRegister,
  userLogin,
  getUser,
  admin,
  resetPassword,
  otpGenerate,
  verifyOTP,
  customerCount,
  fetchCustomers,
  adminView,
  getUsers
} = require("../Controllers/userController");
const {
  handleCheckout,
  handlePaymentVerification,
  handleGetKey,
} = require("../Controllers/paymentController");
const {
  addProduct,
  viewProducts,
  updateProductQuantity,
  deleteProduct,
  searchProduct
} = require("../Controllers/productController");
const{
  addVendor,
  fetchVendor,
  deleteVendor
}=require("../Controllers/vendorController")

const{
  orderSummary,
  getOrder,
  updateOrder,
  updateInventory,
  orderCount
}=require("../Controllers/orderController")

/************************ User Routes ************************/
router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/admin", fetchuser, admin);
router.post("/getuser/:id", fetchuser, getUser);
router.put("/resetpass", resetPassword);
router.post("/generateotp", otpGenerate);
router.post("/verifyotp", verifyOTP);
router.post("/customercount", customerCount);
router.post("/productcount", customerCount);
router.get("/fetchcustomer", fetchCustomers);
router.get("/getusers", getUsers);


/************************ Vendor Routes ************************/
router.post("/addvendor",addVendor);
router.get("/fetchvendor",fetchVendor);
router.delete("/deletevendor/:id",deleteVendor);

/***********************ProductRoutes****************************/
router.get("/viewproducts", adminView);
router.delete("/deleteproduct/:id",deleteProduct); //deleting from admin side
router.post("/addproduct", upload.single("image"), addProduct);
router.get("/viewproduct/:id", viewProducts);
router.patch("/updateproductquantity/:id",updateProductQuantity)
router.get("/searchproduct",searchProduct)


/***********************Order Routes****************************/
router.get("/ordersummary", orderSummary);
router.put("/getorder/:id", getOrder);
router.put("/updateorder/:id", updateOrder);
router.post("/updateinventory/:id", updateInventory);  //update by product id
router.post("/ordercount", orderCount);



/************************Payment*******************************/
router.post("/checkout", handleCheckout);
router.post("/paymentverification", handlePaymentVerification);
router.get("/api/getkey", handleGetKey);

module.exports = router;
