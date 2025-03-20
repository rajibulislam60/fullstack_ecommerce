import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [cartList, setCartList] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const data = useSelector((state) => state.user.value);

  useEffect(() => {
    let isMounted = true;
    if (data?._id) {
      axios
        .get(`http://localhost:5000/api/v1/cart/sigleUserCart/${data._id}`)
        .then((response) => {
          if (isMounted) {
            setCartList(response.data.data);
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
    return () => {
      isMounted = false;
    };
  }, [data]);

  const handleOrder = () => {
    if (!data?._id || !phone || !city || !address) {
      alert("Please fill in all fields before placing the order.");
      return;
    }

    const cartItems = cartList.map((item) => ({
      productid: item.products._id,
    }));

    axios
      .post("http://localhost:5000/api/v1/order/addOrder", {
        user: data._id,
        phone,
        city,
        address,
        paymentmethod: paymentMethod,
        cartItems: cartItems,
        totalprice: TotalPrice,
      })
      .then((response) => {
        window.location.href = response.data;
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const SubTotalPrice = cartList.reduce(
    (total, item) => total + item.products.discountPrice,
    0,
  );
  const TotalPrice = SubTotalPrice + 100;

  return (
    <section className="bg-white antialiased dark:bg-gray-900 md:py-16 py-8">
      {loading ? (
        <p className="text-center text-gray-700 dark:text-white">
          Loading cart data...
        </p>
      ) : (
        <form action="#" className="2xl:px-0 max-w-screen-xl mx-auto px-4">
          <div className="lg:flex lg:gap-12 lg:items-start mt-6 sm:mt-8 xl:gap-16">
            <div className="flex-1 min-w-0 space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900 text-xl dark:text-white font-semibold">
                  Delivery Details
                </h2>

                {/* City Input */}
                <div>
                  <label className="text-gray-900 text-sm block dark:text-white font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                    className="border border-gray-300 p-2.5 rounded-lg text-gray-900 text-sm w-full block dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-blue-500 mt-1"
                    required
                  />
                </div>

                {/* Address Input */}
                <div>
                  <label className="text-gray-900 text-sm block dark:text-white font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="border border-gray-300 p-2.5 rounded-lg text-gray-900 text-sm w-full block dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-blue-500 mt-1"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="text-gray-900 text-sm block dark:text-white font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="border border-gray-300 p-2.5 rounded-lg text-gray-900 text-sm w-full block dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 focus:ring-blue-500 mt-1"
                    required
                  />
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4">
                <h3 className="text-gray-900 text-xl dark:text-white font-semibold">
                  Payment
                </h3>
                <div>
                  <div className="flex items-center mb-4 mt-4">
                    <input
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      id="cod"
                      checked={paymentMethod === "COD"}
                      type="radio"
                      value="COD"
                      name="payment-method"
                      className="bg-gray-100 border-gray-300 h-4 text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="cod"
                      className="text-gray-900 text-sm dark:text-gray-300 font-semibold ms-2"
                    >
                      Cash On Delivery
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      id="online"
                      checked={paymentMethod === "Online"}
                      type="radio"
                      value="Online"
                      name="payment-method"
                      className="bg-gray-100 border-gray-300 h-4 text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="online"
                      className="text-gray-900 text-sm dark:text-gray-300 font-semibold ms-2"
                    >
                      Online Payment
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:max-w-xs lg:mt-0 mt-6 sm:mt-8 space-y-6 xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 dark:divide-gray-800 divide-gray-200 divide-y">
                  <dl className="flex justify-between gap-4 items-center py-3">
                    <dt className="text-base text-gray-500 dark:text-gray-400 font-normal">
                      Subtotal
                    </dt>
                    <dd className="text-base text-gray-900 dark:text-white font-medium">
                      {SubTotalPrice} Tk
                    </dd>
                  </dl>
                  <dl className="flex justify-between gap-4 items-center py-3">
                    <dt className="text-base text-gray-500 dark:text-gray-400 font-normal">
                      Delivery Charge
                    </dt>
                    <dd className="text-base text-gray-900 dark:text-white font-medium">
                      100 Tk
                    </dd>
                  </dl>
                  <dl className="flex justify-between gap-4 items-center py-3">
                    <dt className="text-base text-gray-900 dark:text-white font-bold">
                      Total
                    </dt>
                    <dd className="text-base text-gray-900 dark:text-white font-bold">
                      {TotalPrice} Tk
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleOrder}
                  type="button"
                  className="flex bg-teal-500 justify-center rounded-md text-[20px] text-semibold text-white w-full hover:bg-teal-700 items-center py-3"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default CheckOut;
