import React from "react";
import Container from "./Container";
import Products from "./Products";

const FeatureProducts = () => {
  return (
    <section>
      <Container>
        <div className="py-6">
          <h2 className="mb-4 text-xl font-bold text-teal-600">
            Feature Products
          </h2>
          <div className="grid grid-cols-2 gap-4 px-1 md:grid-cols-3 lg:grid-cols-4">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureProducts;
