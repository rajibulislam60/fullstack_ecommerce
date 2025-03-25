import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLoginInfo } from "../slices/userSlice";
import Cookies from "js-cookie";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux under state.user.user

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(userLoginInfo(null));
    Cookies.remove("user");
    
    setIsLoggedOut(true);


    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Logging Out...</h2>

        {user && !isLoggedOut ? (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Profile Details</h3>
            <div className="mt-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Logging out...</p>
        )}

        {isLoggedOut && (
          <p className="text-gray-600">You have been logged out. Redirecting to login...</p>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg bg-red-600 py-2.5 font-medium text-white transition-colors hover:bg-red-700"
          >
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
