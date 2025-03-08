import React from "react";
import { Slider } from "@material-tailwind/react";

const Sidebar = () => {
  return (
    <div className="px-2">
      {/* ------------------------- Catagory item ------------------------- */}
      <div className="mr-6 w-full rounded-md px-8 py-5 shadow-lg shadow-gray-400">
        <h2 className="mb-4 text-[24px] font-semibold leading-7 text-teal-500">
          Categoris
        </h2>
        <ul>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Shirts
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            T-Shirts
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Pants
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Sharee
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Computer
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Laptop
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Mobile
          </li>
          <li className="mb-2 cursor-pointer text-[18px] font-medium text-gray-800">
            Tab
          </li>
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
