import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginInfo } from "../slices/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    dispatch(userLoginInfo(null));

    setTimeout(() => {
      navigate("/shop");
    }, 2000);
  }, [dispatch, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Logging Out...</h2>
        <p className="text-gray-600">You will be redirected to the login page.</p>
      </div>
    </div>
  );
};

export default Logout;
