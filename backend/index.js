require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const videoRoutes = require("./server");
const cors = require("cors");

const app = express();
const port = process.env.NODE_ENV;

app.use(cors({ origin: "https://xflix-frontend-hazel.vercel.app/" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.redirect("/v1/videos");
});
app.use("/v1/videos", videoRoutes);

mongoose
  // .connect("mongodb://127.0.0.1:27017/xflix")
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
