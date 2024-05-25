const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./Config/db");
const Routes = require("./Routes/routes");
const bodyParser = require("body-parser");
const orderRouter = require("./routes/orderRoutes");
//config dot env
dotenv.config();

//Object
const app = express();
app.use(cors());

//port
const PORT = 5000 || process.env.PORT;

//database call
db();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

//  Available Routes
app.use("/", Routes);
app.use(bodyParser.json());
app.use('/api/orders', orderRouter);
//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
