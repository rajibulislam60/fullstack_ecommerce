const express = require("express");
const {
  addOrderController,
  paymentSuccessController,
  paymentFailController,
  paymentCencelController,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/addOrder", addOrderController);

router.post("/success", paymentSuccessController);

router.post("/fail", paymentFailController);

router.post("/cencel", paymentCencelController);

module.exports = router;
