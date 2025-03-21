import React from 'react'
import { Link } from "react-router";

const Fail = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 md:mx-auto shadow-lg rounded-lg text-center">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-16 w-16 bg-red-600 text-white rounded-full mx-auto my-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h3 className="text-base text-gray-900 font-semibold md:text-2xl">
          Payment Failed!
        </h3>
        <p className="text-gray-600 my-2">
          Try again later.
        </p>
        <p>Have a great day!</p>
        <div className="py-6">
          <Link
            to="/shop"
            className="bg-teal-600 text-white font-semibold hover:bg-teal-700 px-12 py-3 rounded-lg"
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Fail