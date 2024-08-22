const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  brand: String
});

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
module.exports = productModel;
