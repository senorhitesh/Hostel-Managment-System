import React from "react";

const Login = () => {
  return (
    <div className="max-w-5xl bg-gray-100 h-screen mx-auto flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold text-4xl">Suthar Samaj Hostel</h1>
      <form className="flex flex-col h-fit justify-center gap-2 bg-white p-6 w-1/2 rounded-md">
        <div className="flex flex-col bg-amber-500  px-2 py-4 rounded-md">
          <label
            htmlFor="email"
            className="after:content-['*'] after:m-1 after:text-red-500 font-medium  "
          >
            Email
          </label>
          <input
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="px-4 py-2 font-medium bg-gray-100 border rounded-md border-gray-400 active:outline-none"
          />
        </div>

        <div className="flex flex-col bg-amber-500  px-2 py-4 rounded-md">
          <label
            htmlFor="pass"
            className="after:content-['*'] after:m-1 after:text-red-500 font-medium  "
          >
            Password
          </label>
          <input
            autoComplete="off"
            name="pass"
            type="email"
            placeholder="Enter your Password"
            className="px-4 py-2 font-medium bg-gray-100 border rounded-md border-gray-400 active:outlinr-none"
          />
        </div>
        <button className="mt-2 bg-[#111] text-white py-2 rounded-md hover:bg-black/90 transtion-all shadow-md hover: duration-150 active:scale-98 hover:-translate-y-0.5">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
