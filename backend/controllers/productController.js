const productModel = require("../model/productModel");
const categoryModel = require("../model/categoryModel");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const addProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      sellingPrice,
      discountPrice = 0,
      stock,
      category,
      isFeature = false,
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

    const updateCategory = await categoryModel.findOneAndUpdate(
      { _id: category },
      { $push: { products: product._id } },
      { new: true }
    );

    if (!updateCategory) {
      return res
        .status(404)
        .json({ success: false, msg: "Category not found" });
    }

    return res.status(201).json({
      success: true,
      msg: "Product created successfully",
      product,
    });
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
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, msg: "Invalid product ID" });
  }

  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, msg: "Product not found" });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id), // Convert to ObjectId
      { isFeature: !product.isFeature },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      msg: `Product ${updatedProduct.isFeature ? "marked as Featured" : "removed from Featured"} successfully`,
      data: updatedProduct,
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message || "Internal Server Error" });
  }
}

async function allFeatureProductController(req, res) {
  const product = await productModel.find({ isFeature: true });

  res.send(product);
}

const totalProductsController = async (req, res) => {
  try {
    const totalProducts = await productModel.countDocuments();
    res.status(200).json({
      success: true,
      totalProducts,
    });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message || err });
  }
};

const bestSellingProductsController = async (req, res) => {
  try {
    const bestSelling = await productModel.aggregate([
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "cartItems.productId",
          as: "orderDetails",
        },
      },
      { $unwind: { path: "$orderDetails", preserveNullAndEmptyArrays: true } }, // ✅ Preserve products with no orders
      { $unwind: { path: "$orderDetails.cartItems", preserveNullAndEmptyArrays: true } }, // ✅ Preserve cart items
      {
        $group: {
          _id: "$_id", // Group by product ID
          name: { $first: "$name" }, // Get product name
          sales: { $sum: { $ifNull: ["$orderDetails.cartItems.quantity", 0] } }, // ✅ If no sales, default to 0
        },
      },
      { $sort: { sales: -1 } }, // Sort by sales in descending order
      { $limit: 5 }, // Get top 5 best-selling products
    ]);

    // If no products are found or sales data is empty, return 0
    if (bestSelling.length === 0) {
      res.status(200).json({
        success: true,
        bestSelling: [{ name: "No Products Sold", sales: 0 }],
      });
    } else {
      res.status(200).json({
        success: true,
        bestSelling,
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message || err });
  }
};







module.exports = {
  addProductController,
  deleteProductController,
  allProductController,
  singleProductController,
  byCategoryProductController,
  allFeatureProductController,
  featureProductController,
  totalProductsController,
  bestSellingProductsController,
};
