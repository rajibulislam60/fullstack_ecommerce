const cartModel = require("../model/cartModel");

async function cartController(req, res) {
  let { user, quantity, products } = req.body;

  try {
    let cart = new cartModel({
      user,
      quantity,
      products,
    });
    await cart.save();
    res.status(200).send({
      success: true,
      msg: "Products add to cart successful",
      data: cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Internal cart server error"}`,
      error,
    });
  }
}

async function getSingleUserCart(req, res) {
  let { userId } = req.params;

  try {
    let cart = await cartModel.find({ user: userId }).populate("products")
    res.status(200).send({
      success: true,
      msg: "User cart successful",
      data: cart,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Cart user server error"}`,
      error,
    });
  }
}

async function cartproductIncrement(req, res) {
  let { id } = req.params;

  try {
    const cart = await cartModel
      .findOneAndUpdate({ _id: id })
      .populate("products");

    if (cart.products.stock > cart.quantity) {
      cart.quantity++;
      await cart.save();
      res.status(200).send({ msg: "Cart quantity increment done", data: cart });
    } else {
      res.status(200).send({ msg: "Out of Stock" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Cart Product Increment error"}`,
      error,
    });
  }
}

async function cartproductDecrement(req, res) {
  let { id } = req.params;

  try {
    const cart = await cartModel.findOneAndUpdate({ _id: id });
    if (cart.quantity > 1) {
      cart.quantity--;
    }
    await cart.save();
    res.status(200).send({ msg: "Cart quantity decrement done", data: cart });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Cart Product Decrement error"}`,
      error,
    });
  }
}

async function cartproductDelete(req, res) {
  let { id } = req.params;
  try {
    const cart = await cartModel
      .findOneAndDelete({ _id: id })
      .populate("products");
    res.status(200).send({ msg: "Cart item delete done", data: cart });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Cart Product Delete error"}`,
      error,
    });
  }
}

module.exports = {
  cartController,
  getSingleUserCart,
  cartproductIncrement,
  cartproductDecrement,
  cartproductDelete,
};
