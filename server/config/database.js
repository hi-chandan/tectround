import mongoose from "mongoose";

export const Connect = mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "test",
  })
  .then(() => console.log("Database connect success"))
  .catch((err) => console.log("database connect faild", err));
