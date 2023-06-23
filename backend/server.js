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
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use("/api/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/api/users/:userId/cart", cartRoutes);

require("./db");

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
