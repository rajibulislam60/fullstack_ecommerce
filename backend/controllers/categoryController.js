const path = require("path");
const categoryModel = require("../model/categoryModel");
const fs = require("fs");

async function CreateCategoryController(req, res) {
  let { name, description } = req.body;

  if (!req.file) {
    return res.status(400).send({ success: false, msg: "Image file is required" });
  }

  try {
    let category = new categoryModel({
      name,
      description,
      image: process.env.HOST_URL + req.file.filename,
    });

    await category.save();
    res.status(201).send({ success: true, msg: "Category created successfully" });
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).send({
      success: false,
      msg: "Internal server error",
      error: err.message,
    });
  }
}

async function deleteCategoryController(req, res) {
  let { id } = req.params;
  try {
    let category = await categoryModel.findOneAndDelete({ _id: id });

    let imagepath = category.image.split("/");
    let oldimagepath = imagepath[imagepath.length - 1];
    fs.unlink(
      `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
      (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            msg: `${err.message ? err.message : "Internal image server error"}`,
            err,
          });
        } else {
          res.send("image deleted");
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Internal server error"}`,
      error,
    });
  }
}

async function allCategoryController(req, res) {
  try {
    let allCategory = await categoryModel.find({});
    res.status(200).json({
      success: true,
      msg: "All category success",
      data: allCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "All category server error"}`,
      error,
    });
  }
}

async function updateCategoryController(req, res) {
  const { id } = req.params;

  let { name, description } = req.body;
  const image = req.file;
  const { filename } = image;

  try {
    let category = await categoryModel.findOneAndUpdate(
      { _id: id },
      { name, description, image: process.env.HOST_URL + req.file.filename }
    );

    let imagepath = category.image.split("/");
    let oldimagepath = imagepath[imagepath.length - 1];
    fs.unlink(
      `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
      (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            msg: `${err.message ? err.message : "Internal image server error"}`,
            err,
          });
        } else {
          res.send("Image Updated");
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Update category server error"}`,
      error,
    });
  }
}

async function singleCategoryController(req, res) {
  let { id } = req.params;
  try {
    let singleCategory = await categoryModel
      .findOne({ _id: id })
      .populate("products");
    res.status(200).send({
      success: true,
      msg: "Category fetched successfully",
      data: singleCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Single category server error"}`,
      error,
    });
  }
}


module.exports = {
  CreateCategoryController,
  deleteCategoryController,
  allCategoryController,
  updateCategoryController,
  singleCategoryController,
};
