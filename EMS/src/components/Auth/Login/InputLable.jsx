import React from "react";
import BgGrid from "./BgGrid";

const InputLable = ({
  name,
  type,
  label,
  placeholder,
  value,
  setValue,
  submitted,
}) => {
  return (
    <>
      <div className={`flex flex-col gap-2 px-2 py-4 rounded-md ${submitted && !value ? `bg-red-50 `: ""}`}>
        <label
          htmlFor={name}
          className= "text-lg text-neutral-900 after:content-['*'] after:ml-1 after:text-red-500 font-medium"
        >
          {label}
        </label>

        <input
          value={value}
          onChange={(val) => {
            setValue(val.target.value);
          }}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className={`
  px-4 py-2 font-medium bg-gray-50
  border rounded-md
  focus:outline-none focus:ring-2 focus:ring-neutral-300
  transition-all duration-200

  ${
    submitted && !value
      ? "border-red-400 ring-2 ring-red-400/60 bg-red-50"
      : "border-gray-400"
  }
`}
        />
      </div>

      <BgGrid />
    </>
  );
};

export default InputLable;
