import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import AllProducts from "../components/AllProducts";
import { FaFilter } from "react-icons/fa";
import { GrExpand } from "react-icons/gr";
import axios from "axios";

const Shop = () => {
  let [fillterModel, setFillterModel] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(50000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/product/allproduct",
        );
        setAllProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    function ResizeScreen() {
      if (window.innerWidth < 1024) {
        setFillterModel(false);
      } else {
        setFillterModel(true);
      }
    }
    ResizeScreen();
    window.addEventListener("resize", ResizeScreen);
  }, []);
  return (
    <section>
      <Container>
        <FaFilter
          onClick={() => setFillterModel(!fillterModel)}
          className="mx-auto mb-3 mr-2 mt-3 cursor-pointer select-none text-xl text-teal-500 lg:hidden"
        />
        <div className="grid grid-cols-12 py-8">
          {fillterModel && (
            <div className="fixed top-11 z-50 col-span-12 w-full bg-white md:w-[95%] lg:static lg:col-span-3">
              <GrExpand
                onClick={() => setFillterModel(false)}
                className="mx-auto mb-3 mr-2 mt-3 cursor-pointer select-none text-xl text-red-500 lg:hidden"
              />
              <Sidebar
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                allProducts={allProducts}
                setFilteredProducts={setFilteredProducts}
              />
            </div>
          )}

          <div className="col-span-12 lg:col-span-9">
            <AllProducts filteredProducts={filteredProducts} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
