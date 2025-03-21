import React from "react";
import { Link } from "react-router";

const Cancel = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 md:mx-auto shadow-lg rounded-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-16 w-16 text-yellow-600 mx-auto my-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6 6l12 12"
          />
        </svg>

        <h3 className="text-base text-gray-900 font-semibold md:text-2xl">
          Payment Canceled!
        </h3>
        <p className="text-gray-600 my-2">Your transaction has been canceled.</p>
        <p>Feel free to try again anytime.</p>

        <div className="py-6">
          <Link
            to="/shop"
            className="bg-teal-600 text-white font-semibold hover:bg-teal-700 px-12 py-3 rounded-lg transition"
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
