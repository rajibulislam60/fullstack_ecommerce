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
      .then(() => alert("Order Successful"))
      .catch((err) => console.log(err));
  };

  const SubTotalPrice = cartList.reduce(
    (total, item) => total + item.products.discountPrice,
    0,
  );
  const TotalPrice = SubTotalPrice + 100;

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      {loading ? (
        <p className="text-center text-gray-700 dark:text-white">
          Loading cart data...
        </p>
      ) : (
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                {/* City Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                {/* Address Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>
                <div>
                  <div className="mb-4 mt-4 flex items-center">
                    <input
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      id="cod"
                      checked={paymentMethod === "COD"}
                      type="radio"
                      value="COD"
                      name="payment-method"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="cod"
                      className="ms-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
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
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="online"
                      className="ms-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                    >
                      Online Payment
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {SubTotalPrice} Tk
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Delivery Charge
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      100 Tk
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {TotalPrice} Tk
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleOrder}
                  type="button"
                  className="text-semibold flex w-full items-center justify-center rounded-md bg-teal-500 py-3 text-[20px] text-white hover:bg-teal-700"
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
