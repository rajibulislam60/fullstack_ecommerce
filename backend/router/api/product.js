const express = require("express");
const {
  addProductController,
  deleteProductController,
  allProductController,
  byCategoryProductController,
  featureProductController,
  singleProductController,
} = require("../../controllers/productController");
const router = express.Router();
const multer = require("multer");
const { authMiddleware } = require("../../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extention = file.originalname.split(".");
    cb(
      null,
      file.fieldname + "-" + uniqueName + `.${extention[extention.length - 1]}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

function errCheck(err, req, res, next) {
  if (err) {
    return res.status(500).send({ success: false, msg: err.massage });
  }
  next();
}

router.post(
  "/addProduct",
  authMiddleware,
  upload.array("image"),
  errCheck,
  addProductController
);

router.delete("/deleteproduct/:id", authMiddleware, deleteProductController);

router.get("/allproduct", allProductController);

router.get("/singleProduct/:id", singleProductController);

router.get("/byCategory/:id", byCategoryProductController);

router.get("/isfeature", featureProductController);

module.exports = router;
