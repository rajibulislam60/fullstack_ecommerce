import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const ThirdBannar = () => {
  return (
    <div>
      <Container>
        <div>
          <h2 className="mb-4 text-xl font-bold text-teal-600">Offer Products</h2>
          <Link to="/shop">
            <img
              className="h-[400px] w-full object-cover"
              src="https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2024%2F10%2Fskin-cafe-banner.gif&w=1920&q=75"
              alt="Third Bannar Image"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ThirdBannar;
