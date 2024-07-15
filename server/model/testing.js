import mongoose from "mongoose";

const Testing = new mongoose.Schema({
  name: String,
  email: String,
});

export const Test = mongoose.model("Testing", Testing);
