const orderModel = require("../model/orderModel");
const SSLCommerzPayment = require("sslcommerz-lts");

const store_id = process.env.Store_Id;
const store_passwd = process.env.Store_password;
const is_live = false; //true for live, false for sandbox

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
      quantity,
      productid,
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
    let tran_id = "TXN" + Date.now().toString();

    const data = {
      total_amount: 100,
      currency: "BDT",
      tran_id: tran_id, // use unique tran_id for each api call
      success_url: `http://localhost:5000/api/v1/order/success/${tran_id}`,
      fail_url: `http://localhost:5000/api/v1/order/fail/${tran_id}`,
      cancel_url: `http://localhost:5000/api/v1/order/cancel/${tran_id}`,
      ipn_url: "http://localhost:5000/api/v1/order/ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: address,
      cus_add2: "Dhaka",
      cus_city: city,
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: phone,
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then(async (apiResponse) => {
      console.log(apiResponse);
      let order = new orderModel({
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
        trans_id: tran_id,
      });
      await order.save();

      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      // res.redirect(GatewayPageURL)
      return res.status(200).send(GatewayPageURL);
    });
  }
}

async function paymentSuccessController(req, res) {
  const { id } = req.params;

  let paymentUpdate = await orderModel
    .findOneAndUpdate(
      { trans_id: id },
      { paymentStatus: "Paid" },
      { new: true }
    )
    .then(() => {
      res.redirect(`http://localhost:5173/success/${id}`);
    });
}

async function paymentFailController(req, res) {
  const { id } = req.params;
  let orderDelete = await orderModel
    .findOneAndDelete({ trans_id: id })
    .then(() => {
      res.redirect("http://localhost:5173/fail");
    });
}

async function paymentCencelController(req, res) {
  const { id } = req.params;
  let orderDelete = await orderModel
    .findOneAndDelete({ trans_id: id })
    .then(() => {
      res.redirect("http://localhost:5173/cencel");
    });
}

module.exports = {
  addOrderController,
  paymentSuccessController,
  paymentFailController,
  paymentCencelController,
};
