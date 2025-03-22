const productModel = require("../model/productModel");
const path = require("path");
const fs = require("fs");

const addProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      sellingPrice,
      discountPrice,
      stock,
      category,
      isFeature,
    } = req.body;

    if (!name || !description || !sellingPrice || !stock || !category) {
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });
    }

    const images =
      req.files?.map((item) => process.env.HOST_URL + item.filename) || [];

    const product = new productModel({
      name,
      description,
      sellingPrice,
      discountPrice,
      stock,
      category,
      image: images,
      isFeature,
    });

    await product.save();
    return res
      .status(201)
      .json({ success: true, msg: "Product created successfully", product });
  } catch (err) {
    console.error("Error adding product:", err);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};

async function deleteProductController(req, res) {
  let { id } = req.params;
  try {
    let deleteproduct = await productModel.findOneAndDelete({ _id: id });
    let imagepatharray = deleteproduct.image;

    imagepatharray.forEach((item) => {
      let imagepath = item.split("/");
      let oldimagepath = imagepath[imagepath.length - 1];
      fs.unlink(
        `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
        (err) => {
          if (err) {
            console.error("Error deleting image:", err);
          }
        }
      );
    });
    return res.status(200).json({
      success: true,
      msg: "product deleted successfull",
      data: deleteproduct,
    });
  } catch (err) {
    return res.status(500).send({ success: false, msg: err.message || err });
  }
}

async function allProductController(req, res) {
  try {
    let allproduct = await productModel.find({});
    return res.status(200).json({
      success: true,
      msg: "All product successfull",
      data: allproduct,
    });
  } catch (err) {
    return res.status(500).send({ success: false, msg: err.message || err });
  }
}

async function singleProductController(req, res) {
  let { id } = req.params;
  try {
    let singleProduct = await productModel.findOne({ _id: id });
    res.status(200).send({
      success: true,
      msg: "Single Product successful",
      data: singleProduct,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Single Product server error"}`,
      error,
    });
  }
}

async function byCategoryProductController(req, res) {
  const { id } = req.params;
  try {
    const products = await productModel.find({ category: id });
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ error: "Error fetching products by category" });
  }
}

async function featureProductController(req, res) {
  const product = await productModel.find({ isFeature: true });

  res.send(product);
}

module.exports = {
  addProductController,
  deleteProductController,
  allProductController,
  singleProductController,
  byCategoryProductController,
  featureProductController,
};
