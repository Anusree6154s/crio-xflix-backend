require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const videoRoutes = require("./server");
const serverless = require("serverless-http");

const app = express();
const port = process.env.NODE_ENV;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running..");
});
app.use("/v1/videos", videoRoutes);
// app.use("/.netlify/functions/app", "/v1/videos", videoRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/xflix")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
