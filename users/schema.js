import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    role: {
      type: String,
      enum: ["OWNER", "USER", "ADMIN"],
      default: "USER" },
    userProfileImg: URL
  },
  { collection: "users" });
export default userSchema;