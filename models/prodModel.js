const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
