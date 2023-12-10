import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    restaurantId: { type: String, required: true, unique: true },
    content: String,
    date: Date,
    img: String
  },
  { collection: "review" });
export default reviewSchema;