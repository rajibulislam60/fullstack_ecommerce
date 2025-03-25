import React from "react";
import TotalProducts from "../components/TotalProducts";
import TotalSaleProducts from "../components/TotalSaleProducts";
import BestSellingProduct from "../components/BestSellingProduct";
import TotalRevenue from "../components/TotalRevenue";
import TotalUser from "../components/TotalUser";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <TotalProducts />
      <TotalSaleProducts/>
      <BestSellingProduct/>
      <TotalRevenue/>
      <TotalUser/>
    </div>
    <img className="w-full object-cover h-[550px] mt-10" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Qn-2SRMWY1fTyYo-9_pA5A.png" alt=" chart" />
    </div>
    
  );
};

export default Home;
