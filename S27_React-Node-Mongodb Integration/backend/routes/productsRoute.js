const { Router } = require("express");
const verifyToken = require("../middleware/tokenVerification");
const { getAllProducts } = require("../controllers/productsController");
const route = Router();

route.get("/products", verifyToken, getAllProducts);
// http://localhost:5001/api/product/products

module.exports = route;
