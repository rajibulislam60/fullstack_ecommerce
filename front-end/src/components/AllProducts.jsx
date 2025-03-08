import React from "react";
import Paginate from "./Paginate";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-6 px-1 md:grid-cols-3 xl:grid-cols-4">
      <Paginate itemsPerPage={8} />
    </div>
  );
};

export default AllProducts;
