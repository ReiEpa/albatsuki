require("dotenv").config(); // Load .env file

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL) // Access MONGO_URL from process.env
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
