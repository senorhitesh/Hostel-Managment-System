import React from "react";
import Button from "./Login/Button";
import InputLable from "./Login/InputLable";

const Login = () => {
  return (
    <div className="max-w-5xl  min-h-screen mx-auto flex justify-center items-center flex-col gap-4 ">
      <form className="flex flex-col h-fit justify-center gap-2 bg-white p-6 w-1/2 rounded-md shadow-[0px_4px_32px_0_rgba(99,102,241,.10)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.15)] transition-all ">
        <h1 className="font-extrabold  text-4xl ">Suthar Samaj Hostel</h1>
        <InputLable
          name="email"
          type="email"
          placeholder="Enter your Email"
          label="Email"
        />
        <InputLable
          name="Password"
          type="password"
          placeholder="*********"
          label="Password"
        />
        <Button />
      </form>
      <p className="text-gray-400 py-1 px-4 rounded-full hover:text-gray-700 transtion hover:bg-gray-100 ">Agar Id nah hoto office me sampark kare</p>
    </div>
  );
};

export default Login;
