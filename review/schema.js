import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    userId: { type: String, required: true },
    restaurantId: { type: String, required: true },
    content: String,
    // date: Date,
    // img: URL,
  },
  { collection: "review" }
);
export default reviewSchema;
