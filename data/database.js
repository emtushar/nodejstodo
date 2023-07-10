import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "backendApi1" })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((e) => {
      console.log(e);
    });
};
