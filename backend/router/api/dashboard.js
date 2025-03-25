const express = require("express");
const { totalProductsController, bestSellingProductsController } = require("../../controllers/productController");
const { totalSalesController, totalRevenueController } = require("../../controllers/orderController");
const { totalUsersController } = require("../../controllers/authController");

const router = express.Router();

router.get("/totalProducts", totalProductsController);

router.get("/bestSellingProducts", bestSellingProductsController);

router.get("/totalSaleProducts", totalSalesController);

router.get("/totalRevenue", totalRevenueController);

router.get("/totalUser", totalUsersController);


module.exports = router;