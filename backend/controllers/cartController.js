const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Add an item to the user's cart
const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  const user = await User.findById(userId);

  if (user) {
    const existingCartItemIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists in the cart, update the quantity
      user.cart[existingCartItemIndex].quantity += quantity;
    } else {
      // If the item doesn't exist, add a new cart item
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json({ message: "Item added to cart" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Remove an item from the user's cart
const removeFromCart = asyncHandler(async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user._id;

  const user = await User.findById(userId);

  if (user) {
    user.cart = user.cart.filter(
      (item) => item.productId.toString() !== itemId
    ); // Convert `itemId` to string for comparison
    await user.save();
    res.status(200).json({ message: "Item removed from cart" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Get the user's cart items
const getCartItems = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId).populate({
    path: "cart.productId",
    match: { _id: { $exists: true } }, // Only include products that have an ID
  });

  if (user) {
    const cartItems = user.cart.filter((item) => item.productId); // Filter out cart items with missing products
    res.status(200).json(cartItems);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
module.exports = { addToCart, removeFromCart, getCartItems };
