import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import Products from "./Products";

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    const fetchAllFeaturedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/product/isfeature");
        
        console.log("Featured Products:", response);
        
        setFeatureProducts(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchAllFeaturedProducts();
  }, []);

  return (
    <section>
      <Container>
        <div className="py-6">
          <h2 className="mb-4 text-xl font-bold text-teal-600">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 gap-4 px-1 md:grid-cols-3 lg:grid-cols-4">
            {featureProducts.length > 0 ? (
              featureProducts.map((products) => (
                <Products key={products._id} products={products} />
              ))
            ) : (
              <p className="text-gray-500">No featured products available.</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureProducts;
