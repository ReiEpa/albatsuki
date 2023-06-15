const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello server");
});

const productsRoutes = require("./routes/productsRoutes");

app.use("/products", productsRoutes);

require("./db");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
