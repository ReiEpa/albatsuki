const Products = require("../models/productsModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
exports.addProduct = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find any data with ID ${req.params.id}` });
    }

    // Update the properties of the product object
    product.productName = req.body.productName;
    product.productPrice = req.body.productPrice;
    product.productCategory = req.body.productCategory;
    product.productAnime = req.body.productAnime;
    product.productImg = req.body.productImg;

    // Save the updated product
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: `Cannot find any data with ID ${id}` });
    }
    res.status(200).json({ message: `Product with ID ${id} has been deleted` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
