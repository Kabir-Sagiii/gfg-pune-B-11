const { Router } = require("express");

const route = Router();

route.get("/get-all-orders", (req, res) => {
  console.log("get-all-order endpoint is called");
  res.send("getOrder Endpoint Working .... !!!!!!!!!!!");
});

//http://localhost:4747/api/orders/get-all-orders

module.exports = route;
