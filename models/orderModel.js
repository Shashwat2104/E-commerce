const mongoose = require("mongoose");

const orderPlacedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  orderDate: { type: Date, default: Date.now },
  totalOrderValue: { type: Number, required: true },
});

const OrderModel = mongoose.model("Order", orderPlacedSchema);

module.exports =  OrderModel ;
