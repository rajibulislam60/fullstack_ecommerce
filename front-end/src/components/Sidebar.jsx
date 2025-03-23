import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = ({
  maxPrice,
  setMaxPrice,
  allProducts,
  setFilteredProducts,
}) => {
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory",
      );
      setAllCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handlePriceFilter = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    const filtered = allProducts.filter(
      (item) =>
        item.discountPrice !== undefined &&
        item.discountPrice >= 0 &&
        item.discountPrice <= value,
    );

    setFilteredProducts(filtered);
  };

  const handleCategoryFilter = (categoryId) => {
    const filtered = allProducts.filter((item) => item.category === categoryId);
    setFilteredProducts(filtered);
    setActiveCategory(categoryId);
    handleCategoryFilter(categoryId);
  };

  return (
    <div className="px-2">
      {/* ------------------------- Catagory item ------------------------- */}
      <div className="mr-6 w-full rounded-md px-8 py-5 shadow-lg shadow-gray-400">
        <h2 className="mb-4 text-[24px] font-semibold leading-7 text-teal-500">
          Categoris
        </h2>
        <ul>
          {allCategories.map((item) => (
            <li
              onClick={() => {
                handleCategoryFilter(item._id);
              }}
              className={`mb-2 cursor-pointer text-[18px] font-medium transition-colors ${
                activeCategory === item._id
                  ? "text-teal-500 font-semibold"
                  : "text-gray-800 hover:text-teal-500"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {/* ----------------------- Price Range ------------------------- */}
      <div className="mb-4 mr-6 mt-8 w-full rounded-md px-8 py-5 shadow-lg shadow-gray-400">
        <h2 className="mb-4 text-[24px] font-semibold leading-7 text-teal-500">
          Price Fillter
        </h2>
        <div className="">
          <label>Value - {maxPrice}</label>
          <input
            type="range"
            onChange={handlePriceFilter}
            min={0}
            max={500000}
            defaultValue={500000}
            className="w-full bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
