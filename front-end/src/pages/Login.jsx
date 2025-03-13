import axios from "axios";
import React, { useState } from "react";
import { userLoginInfo } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
// import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch()
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    setError("");

    axios
      .post(
        "http://localhost:5000/api/v1/auth/login",
        { email, password },
        { withCredentials: true },
      )
      .then((data) => {
        console.log(data)
        dispatch(userLoginInfo(data.data.data))
          // Cookies.set(
          //   "user",
          //   String(data.data.data.role + data.data.data._id),
          //   {
          //     expires: 30 / 1440,
          //   },
          // );
          navigate("/");
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Something went wrong.");
      });
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Sign In
          </h2>
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          <form onSubmit={handlelogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
