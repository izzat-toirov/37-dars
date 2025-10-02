import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500  p-6">
      <div className="bg-white rounded-2xl shadow-xl flex w-full max-w-4xl overflow-hidden">
        <div className="w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col justify-center items-start p-10">
          <h1 className="text-4xl font-bold mb-4">WELCOME</h1>
          <h2 className="text-lg font-semibold mb-2">YOUR HEADLINE NAME</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign in</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="User Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2 text-sm text-blue-600 cursor-pointer">
                  SHOW
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign in
              </button>
            </form>
            <p className="text-sm text-center text-gray-500 mt-5">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
