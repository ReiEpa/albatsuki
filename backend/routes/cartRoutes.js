const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const cartController = require("../controllers/cartController");

router.route("/").post(protect, cartController.addToCart);
router.route("/:id").delete(protect, cartController.removeFromCart);
router.route("/").get(protect, cartController.getCartItems);

module.exports = router;
