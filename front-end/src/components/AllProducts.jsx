import React from "react";
import Paginate from "./Paginate"; // Assuming you have a Paginate component

const AllProducts = ({ filteredProducts }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-teal-500 mb-4">All Products</h2>
      <Paginate allProducts={filteredProducts} itemsPerPage={12} />
    </div>
  );
};

export default AllProducts;
