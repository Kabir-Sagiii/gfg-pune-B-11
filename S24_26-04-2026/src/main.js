// Create & Start a Http Server with Express;
const express = require("express");
const mongoose = require("mongoose");

const UserRoute = require("./routes/userRoute");

const OrderRoute = require("./routes/orderRoutes");

const { connectServer } = require("./model/userModel");

const app = express();

//assigning request data of client to the request object body property as a value
app.use(express.json());

app.use("/api/users", UserRoute);

app.use("/api/orders", OrderRoute);

app.listen(4747, () => {
  console.log("Http Server Started...!!!");
  // connectServer();
  mongoose
    .connect("mongodb://localhost:27017/gfg11DB")
    .then(() => {
      console.log("connected to server via mongoose");
    })
    .catch((error) => {
      console.log(error);
    });
});
// http://localhost:4747
