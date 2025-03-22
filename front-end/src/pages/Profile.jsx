import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.user.userInfo);
  const [user, setUser] = useState(reduxUser || JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Fix: Correctly close the if statement
  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900">Profile</h2>
        <div className="space-y-4 text-center">
          <img
            src={user.avatar || "https://via.placeholder.com/100"}
            alt="User Avatar"
            className="mx-auto h-24 w-24 rounded-full border"
          />
          <p className="text-lg font-semibold">{user.name || "No Name"}</p>
          <p className="text-gray-600">{user.email || "No Email"}</p>
          <p className="text-gray-600">Role: {user.role || "User"}</p>
          <button
            onClick={() => navigate("/logout")}
            className="mt-4 w-full rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
