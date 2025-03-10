import React, { useEffect, useState } from "react";
import { Slider } from "@material-tailwind/react";
import axios from "axios";

const Sidebar = () => {
   const [allCategories, setAllCategories] = useState([]);
  
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
  return (
    <div className="px-2">
      {/* ------------------------- Catagory item ------------------------- */}
      <div className="mr-6 w-full rounded-md px-8 py-5 shadow-lg shadow-gray-400">
        <h2 className="mb-4 text-[24px] font-semibold leading-7 text-teal-500">
          Categoris
        </h2>
        <ul>
          {allCategories.map((item)=>(
            <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
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
          <Slider
            defaultValue={50}
            className="text-teal-500"
            barClassName="rounded-none bg-teal-500"
            thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
            trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-teal-50 border border-[#2ec946]/20"
          />
        </div>
      </div>
      {/* ----------------------- Paginate ---------------------- */}
    </div>
  );
};

export default Sidebar;
