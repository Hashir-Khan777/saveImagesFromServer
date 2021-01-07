const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("addToCart", productModel);

module.exports = Products;
