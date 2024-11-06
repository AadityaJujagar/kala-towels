import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.listen(PORT, () => console.log(`App is live at port ${PORT}`));
app.get("/", (req, res) => {
  res.send("Homepage");
});

dbConnect();
