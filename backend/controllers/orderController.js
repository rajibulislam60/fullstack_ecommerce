const orderModel = require("../model/orderModel");

async function addOrderController(req, res) {
  let {
    phone,
    city,
    address,
    paymentmethod,
    paymentStatus,
    quantity,
    productid,
    cartItems,
    totalprice,
    user,
  } = req.body;
  if (paymentmethod == "COD") {
    let order = new orderModel({
      phone,
      city,
      address,
      paymentmethod,
      paymentStatus,
      cartItems,
      totalprice,
      user,
    });
    await order.save();
    res.status(201).json({
      success: true,
      msg: "Order Successful",
      data: order,
    });
  } else {
    res.send("Online Payment");
  }
}

module.exports = {
  addOrderController,
};
