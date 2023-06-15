const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productAnime: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
