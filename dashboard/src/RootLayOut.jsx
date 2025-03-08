import React from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./components/Sidebar";

const RootLayOut = () => {
  return (
    <>
      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayOut;
