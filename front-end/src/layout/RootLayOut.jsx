import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { EcommarceNavbar } from "../components/Navber";
import CartBox from "../components/CartBox";

const RootLayOut = () => {
  return (
    <div className="relative">
      <Header />
      <EcommarceNavbar />
      <CartBox className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-teal-300 cursor-pointer z-10" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayOut;
