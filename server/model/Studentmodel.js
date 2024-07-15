import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    default: "",
  },
  displayName: {
    type: String,
    trim: true,
  },
  municipality: {
    type: String,
  },
});

export const Student = mongoose.model("Student", StudentSchema);
