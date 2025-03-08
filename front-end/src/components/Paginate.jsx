import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./Products";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Products />
            </div>
          ))}
      </>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        nextClassName="bg-teal-500 px-2 py-1 text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        containerClassName="flex gap-3"
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        activeClassName="px-2 py-1 text-white bg-[#000000]"
        previousClassName="bg-teal-500 px-2 py-1 text-white"
        pageClassName="bg-teal-500 px-2 py-1 text-white"
      />
    </>
  );
}

export default Paginate;
