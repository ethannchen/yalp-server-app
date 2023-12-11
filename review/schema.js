import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    username: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    restaurantName: String,
    content: { type: String, required: true },
    date: Date,
    img: String,
  },
  { collection: "review" }
);
export default reviewSchema;
