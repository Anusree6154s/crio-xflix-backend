require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const videoRoutes = require("./routes");
// const cors = require('cors');

const app = express();
const port = 8082;

// app.use(cors());
app.use(express.json());
app.use("/v1/videos", videoRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/xflix")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
