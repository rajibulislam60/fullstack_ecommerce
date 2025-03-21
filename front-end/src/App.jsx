import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./layout/RootLayOut";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import CheckOut from "./components/CheckOut";
import Success from "./components/Success";
import Fail from "./components/Fail";
import Cencel from "./components/Cencel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:categoryId" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
      <Route path="/success/:id" element={<Success />} />
      <Route path="/fail" element={<Fail />} />
      <Route path="/cencel" element={<Cencel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
      
    </>,
  ),
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
