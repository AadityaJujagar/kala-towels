import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
  if (!DB_URL) {
    throw new Error("DB_URL environment variable  is not set");
  }

  try {
    mongoose.connect(DB_URL);
    console.log("Connected to DB successfully");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
