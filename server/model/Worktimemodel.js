import mongoose from "mongoose";

const BaseSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    timeEntries: {
      type: Array,
      default: [],
    },
  },
  { strict: false },
);

export const WorksnapsTimeEntry = mongoose.model(
  "WorksnapsTimeEntry",
  BaseSchema,
);
