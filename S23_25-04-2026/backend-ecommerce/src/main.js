// Create & Start a Http Server with Express;
const express = require("express");

const UserRoute = require("./routes/userRoute");

const OrderRoute = require("./routes/orderRoutes");

const app = express();

//assigning request data of client to the request object body property as a value
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("app.use() is called");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("app.use()-2 is called");
//   next();
// });

app.use("/api/users", UserRoute);

app.use("/api/orders", OrderRoute);

app.listen(4747, () => {
  console.log("Http Server Started...!!!");
});
// http://localhost:4747
