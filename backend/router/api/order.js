const express = require("express");
const { addOrderController } = require("../../controllers/orderController");
const router = express.Router();

router.post("/addOrder", addOrderController)

module.exports = router;