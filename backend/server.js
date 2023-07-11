const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const productsRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use("/api/users", userRoutes);
app.use("/products", productsRoutes);
app.use("/api/users/:userId/cart", cartRoutes);

require("./db");

// ------------- deployment -----------

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  const root = path.join(__dirname, "../frontend/build");
  app.use(express.static(root));

  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello NODE API");
  });
}

// -------------- deployment -------------

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
