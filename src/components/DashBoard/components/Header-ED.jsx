import React from 'react'
import { LogOut } from "lucide-react";

const HeaderED = () => {
  return (
    <>
          <div className=" px-8 mt-4 justify-between flex items-center  ">
          <div className="flex flex-col py-1">
          <h1 className="text-sm font-medium">Welcome back</h1>
          <p className="text-3xl font-bold ">Hitesh <span>🧠</span></p>
        </div>
        <button className="cursor-pointer flex gap-2 text-red-500 border-2 hover:text-white border-red-300 py-2 font-medium rounded-md hover:bg-red-600/90 px-4 transtion-all hover:border-transparent hover:shadow-md  hover: duration-150 active:scale-98 hover:-translate-y-0.5 ">
          Log Out <span><LogOut className="" /></span>
        </button>
      </div>
    </>
  )
}

export default HeaderED