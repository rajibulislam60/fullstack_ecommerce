import React from "react";
import { Link } from "react-router";

const Success = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 md:mx-auto shadow-lg rounded-lg text-center">
        <svg
          viewBox="0 0 24 24"
          className="h-16 text-green-600 w-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h3 className="text-base text-gray-900 font-semibold md:text-2xl">
          Payment Done!
        </h3>
        <p className="text-gray-600 my-2">
          Thank you for completing your secure online payment.
        </p>
        <p>Have a great day!</p>
        <div className="py-6">
          <Link
            to="/shop"
            className="bg-indigo-600 text-white font-semibold hover:bg-indigo-500 px-12 py-3 rounded-lg"
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
