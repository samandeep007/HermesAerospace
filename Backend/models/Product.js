const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  rating: { type: Number, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
}, { timestamps: true });

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, },
    images: { type: [String], required: false },
    category: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    rating: {type: Number},
    regularPrice: {type:Number},
    price: { type: Number, required: true },
    stock: {type: Number, required: false},
    availability: {type: Boolean, default: true},
  
  },
  { timestamps: true }
);

ProductSchema.methods.calculateAvgRating = async function() {
  const reviews = await mongoose.model('Review').find({ product: this._id });
  const ratings = reviews.map(review => review.rating);
  const sum = ratings.reduce((a, b) => a + b, 0);
  this.rating = sum / ratings.length;
  await this.save();
}

module.exports = {
  Product: mongoose.model("Product", ProductSchema),
  Review: mongoose.model("Review", ReviewSchema)
};