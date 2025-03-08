const express = require("express");
const {
  allCategoryController,
  deleteCategoryController,
  CreateCategoryController,
  updateCategoryController,
  singleCategoryController,
} = require("../../controllers/categoryController");
const router = express.Router();
const multer = require("multer");
const { authMiddleware } = require("../../middleware/authMiddleware");
// const upload = multer({ dest: "uploads/" });

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
  "/createCategory",
  authMiddleware,
  upload.single("image"),
  errCheck,
  CreateCategoryController
);

router.delete("/deleteCategory/:id", authMiddleware, deleteCategoryController);

router.get("/allCategory", allCategoryController);

router.patch(
  "/updateCategory/:id",
  authMiddleware,
  upload.single("image"),
  updateCategoryController
);

router.get("/singleCategory/:id", singleCategoryController);

module.exports = router;
