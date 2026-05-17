const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});

const ProductModel = model("product", ProductSchema);

module.exports = ProductModel;
