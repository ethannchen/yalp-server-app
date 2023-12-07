import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("users", schema);
model.updateOne({username:'bob'})
export default model;