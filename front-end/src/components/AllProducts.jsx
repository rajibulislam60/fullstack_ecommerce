import React, { useEffect, useState } from "react";
import Paginate from "./Paginate";
import axios from "axios";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
  
    
  
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
  return (
    <div className="">
      <Paginate allProducts={allProducts} itemsPerPage={8} />
    </div>
  );
};

export default AllProducts;
