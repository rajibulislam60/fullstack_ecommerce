import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./Products";
import axios from "axios";

function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const [allProducts, setAllProducts] = useState([]);

  const items = allProducts;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/product/allproduct",
      );
      setAllProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Products key={item._id} products={item} />
            </div>
          ))}
      </>
    );
  }

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        nextClassName="bg-teal-500 px-2 py-1 text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        containerClassName="flex gap-3 px-2"
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        activeClassName="px-2 py-1 text-white bg-red-500"
        previousClassName="bg-teal-500 px-2 py-1 text-white"
        pageClassName="bg-teal-500 px-2 py-1 text-white"
      />
    </>
  );
}

export default Paginate;
