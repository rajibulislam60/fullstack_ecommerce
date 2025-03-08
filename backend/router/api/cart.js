const express = require("express");
const {
  cartController,
  getSingleUserCart,
  cartproductIncrement,
  cartproductDecrement,
  cartproductDelete,
} = require("../../controllers/cartController");
const router = express.Router();

router.post("/addtoCart", cartController);

router.get("/sigleUserCart/:userId", getSingleUserCart);

router.patch("/productIncrement/:id", cartproductIncrement);

router.patch("/productDecrement/:id", cartproductDecrement);

router.delete("/cartproductDeleted/:id", cartproductDelete);

module.exports = router;
