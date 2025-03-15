const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./category");
const product = require("./product");
const cart = require("./cart");
const order = require("./order");

router.use("/auth", auth);
router.use("/category", category);
router.use("/product", product);
router.use("/cart", cart);
router.use("/order", order)

module.exports = router;
