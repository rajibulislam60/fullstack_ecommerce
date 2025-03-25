import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RootLayOut from "./RootLayOut";
import AddProduct from "./pages/AddProduct";
import AllProduct from "./pages/AllProduct";
import AddCategory from "./pages/AddCategory";
import AllCategory from "./pages/AllCategory";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Feature from "./pages/Feature";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/allCategory" element={<AllCategory />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/allProduct" element={<AllProduct />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
