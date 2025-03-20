const express = require("express");
const { addOrderController, paymentSuccessController } = require("../../controllers/orderController");
const router = express.Router();

router.post("/addOrder", addOrderController)

router.post("/success", paymentSuccessController)

module.exports = router;