import React, { useState } from "react";
import Button from "./Login/Button";
import InputLable from "./Login/InputLable";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sumbitted, setSumbitted] = useState(false)

  const SubmitHandler = (e) => {
    e.preventDefault();
      if (!email || !password) {
    setSumbitted(true);
    return;
  }
    setSumbitted(false)
    setEmail("");
    setPassword("");
  };
  return (
    <div
      className="  relative
              w-full
              min-h-screen
              flex flex-col
              items-center
              justify-center
              bg-white
              overflow-hidden
              px-4 sm:px-6 md:px-8   
              lg:max-w-5xl           
              lg:mx-auto
              
              "
    >
      <div
        className="
             absolute left-0 top-0 h-full w-12
             border-r border-gray-200
             bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)]
             bg-[size:10px_10px] "
      />

      {/* Right Pattern Bar */}
      <div
        className="
           absolute right-0 top-0 h-full w-12
           border-l border-gray-200
           bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)]
           bg-[size:10px_10px]"
      />
      <form
        onSubmit={(val) => {
          SubmitHandler(val);
        }}
        className="flex flex-col h-fit justify-center gap-2 bg-white p-6 w-1/2 rounded-md shadow-[0px_4px_32px_0_rgba(99,102,241,.10)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.15)] transition-all "
      >
        <h1
          className="
               inline-block
               font-primary
               text-4xl font-bold
               bg-gradient-to-t
               from-[#e4a812]
               via-[#F4C430]
               to-[#FFD700]
               bg-clip-text
               text-transparent"
        >
          Suthar Samaj Hostel
        </h1>
        <InputLable
          setValue={setEmail}
          value={email}
          name="email"
          type="email"
          placeholder="Enter your Email"
          label="Email"
          submitted={sumbitted}
        />
        <InputLable
          setValue={setPassword}
          value={password}
          name="Password"
          type="password"
          placeholder="*********"
          label="Password"
          submitted={sumbitted}
        />
        <Button />
        <p className="self-center items-center flex text-gray-400">Don't have an account? <span className="text-bg-500 cursor-pointer hover:text-blue-600 font-medium">Sign Up</span></p>
      </form>
      {/* <p
        className="text-gray-400 cursor-pointer  
      py-1 px-4 rounded-full hover:text-gray-700 transtion hover:bg-gray-100 "
      >
        Agar Id nah hoto office me sampark kare
      </p> */}

    </div>
  );
};

export default Login;
