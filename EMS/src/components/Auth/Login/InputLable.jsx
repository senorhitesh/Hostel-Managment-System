import React from "react";
import BgGrid from "./BgGrid";

const InputLable = ({ name, type, label, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-2 px-2 py-4 rounded-md has-user-invalid:bg-red-50">
        <label
          htmlFor={name}
          className="text-lg text-neutral-900 after:content-['*'] after:ml-1 after:text-red-500 font-medium"
        >
          {label}
        </label>

        <input
          required
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className="
          peer
          px-4 py-2 font-medium bg-gray-50
          border rounded-md border-gray-400
          focus:outline-none focus:ring-2 focus:ring-neutral-300
          transition-all duration-200

          user-invalid:border-red-400
          user-invalid:ring-2
          user-invalid:ring-red-400/60
          user-invalid:bg-red-100
        "
        />
      </div>

      <BgGrid />
    </>
  );
};

export default InputLable;
