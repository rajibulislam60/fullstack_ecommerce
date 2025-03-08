import React from "react";
import { Link } from "react-router-dom";

const TopSelling = () => {
  const topProduct = {
    id: 1,
    image:
      "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2023%2F09%2FJean-Paul-Gaultier-Le-Male-Le-Parfum-Eau-De-Parfum-Intense.jpg&w=1920&q=75",
  };

  return (
    <div className="h-[500px] w-full rounded-lg border bg-white py-4 shadow-lg md:w-[60%]">
      <h3 className="mb-4 px-4 text-xl font-bold text-teal-600">Top Selling Product</h3>
      <div className="h-full">
        <Link to={`/product/${topProduct.id}`}>
          <img
            className="h-[90%] w-full object-cover"
            src={topProduct.image}
            alt={topProduct.name}
          />
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
