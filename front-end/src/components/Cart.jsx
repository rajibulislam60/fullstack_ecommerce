import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const data = useSelector((state) => state.user.value);

  useEffect(() => {
    if (!data) {
      navigate("/");
      return;
    }

    function getCartData() {
      axios
        .get(`http://localhost:5000/api/v1/cart/sigleUserCart/${data._id}`)
        .then((response) => {
          setCartList(response.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getCartData();
  }, [data, navigate]);

  const handleRemoveCartProduct = (item) => {
    axios
      .delete(
        `http://localhost:5000/api/v1/cart/cartproductDeleted/${item._id}`,
      )
      .then(() => {
        setCartList((prevCartList) =>
          prevCartList.filter((cartItem) => cartItem._id !== item._id),
        );
        toast.success("Product Deleted", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let handleIncrement = (item) => {
    axios
      .patch(`http://localhost:5000/api/v1/cart/productIncrement/${item._id}`)
      .then(() => {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      })
      .catch((err) => {
        console.error('Error incrementing product:', err.message);
      });
  };

  let handleDecrement = (item) => {
    axios
      .patch(`http://localhost:5000/api/v1/cart/productDEcrement/${item._id}`)
      .then(() => {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      })
      .catch((err) => {
        console.error('Error incrementing product:', err.message);
      });
  };
  
  const totalPrice = cartList.reduce(
    (total, item) => total + item.products.discountPrice * item.quantity,
    0,
  );

  const handleBackShopping = () => {
    navigate("/shop");
  };

  const TotalPricewithCOD = totalPrice + 100;

  return (
    <div>
      <div className="max-md:max-w-xl mx-auto max-w-5xl p-4">
        <h1 className="text-slate-900 text-2xl font-bold">Your Cart</h1>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {cartList?.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 rounded-md bg-white px-4 py-6 shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]"
              >
                <div className="flex gap-4">
                  <div className="max-sm:w-24 max-sm:h-24 h-28 w-28 shrink-0">
                    <img
                      src={item.products.image[0]}
                      className="h-full w-full object-contain"
                      alt={item.products.name}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-slate-900 text-sm font-semibold sm:text-base">
                        {item.products.name}
                      </h3>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        onClick={() => handleDecrement(item)}
                        type="button"
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 fill-white"
                          viewBox="0 0 124 124"
                        >
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                        </svg>
                      </button>
                      <span className="text-sm font-semibold leading-[18px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(item)}
                        type="button"
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-2 fill-white"
                          viewBox="0 0 42 42"
                        >
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-auto flex flex-col">
                  <div className="flex items-start justify-end gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-slate-400 inline-block h-4 w-4 cursor-pointer hover:fill-pink-600"
                      viewBox="0 0 64 64"
                    >
                      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                    </svg>
                    <svg
                      onClick={() => handleRemoveCartProduct(item)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-slate-400 inline-block h-4 w-4 cursor-pointer hover:fill-red-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                    </svg>
                  </div>
                  <h3 className="text-slate-900 mt-auto text-sm font-semibold sm:text-base">
                    {item.products.discountPrice} TK
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="h-max rounded-md bg-white px-4 py-6 shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
            <ul className="text-slate-900 space-y-4 font-medium">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-semibold">{totalPrice} Tk</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Delivery Charge{" "}
                <span className="ml-auto font-semibold">100 TK</span>
              </li>
              <hr className="border-slate-300" />
              <li className="flex flex-wrap gap-4 text-sm font-semibold">
                Total <span className="ml-auto">{TotalPricewithCOD} Tk</span>
              </li>
            </ul>
            <div className="mt-8 space-y-2">
              <Link to="/checkout">
                <button
                  type="button"
                  className="hover:bg-slate-900 w-full rounded-md bg-teal-800 px-4 py-2.5 text-sm font-semibold tracking-wide text-white"
                >
                  CheckOut Now
                </button>
              </Link>

              <button
                onClick={handleBackShopping}
                type="button"
                className="hover:bg-slate-100 text-slate-900 border-slate-300 w-full rounded-md border bg-transparent px-4 py-2.5 text-sm font-semibold tracking-wide"
              >
                Continue Shopping
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <img
                src="https://readymadeui.com/images/master.webp"
                alt="card1"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/visa.webp"
                alt="card2"
                className="w-10 object-contain"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                alt="card3"
                className="w-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
