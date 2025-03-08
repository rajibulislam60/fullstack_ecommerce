import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Typography className="mx-auto ml-2 mr-4 cursor-pointer py-1.5 text-center text-[26px] font-bold text-teal-500 sm:text-[18px] md:text-[22px] lg:text-[26px]">
            <Link to="/">Exclusive</Link>
          </Typography>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-primary">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border border-black/50 px-3 py-1.5 text-base text-primary outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-teal-500 hover:text-teal-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-black/50 px-3 py-1.5 text-base text-primary outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="shadow-xs flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Sign in
              </button>
            </div>
            <div className="text-sm">
              <a href="#" className="font-semibold text-primary">
                Don't have a account?{" "}
                <span className="cursor-pointer text-[16px] text-teal-500 underline hover:text-teal-600">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
