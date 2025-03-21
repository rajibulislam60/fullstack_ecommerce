const express = require("express");
const {
  addOrderController,
  paymentSuccessController,
  paymentFailController,
  paymentCencelController,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/addOrder", addOrderController);

router.post("/success/:id", paymentSuccessController);

router.post("/fail/:id", paymentFailController);

router.post("/cencel/:id", paymentCencelController);

module.exports = router;
