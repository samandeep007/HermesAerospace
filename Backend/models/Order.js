const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderNo: {type: String, required: true},
    username: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    payment: { type: Object, required: true },
    paymentStatus: {type:String, default: "pending"},
    receipt: {type: String, required: false},
    status: { type: String, default: "pending" },
    trackingNo: {type: String, required: false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
