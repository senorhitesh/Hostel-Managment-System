import React from 'react'
import { LogOut } from "lucide-react";

const HeaderED = () => {
  return (
    <>
          <div className="bg-gray-100 px-8 mt-4 justify-between flex items-center  ">
          <div className="flex flex-col py-1">
          <h1 className="text-sm font-medium">Welcome back</h1>
          <p className="text-3xl font-bold ">Hitesh <span>🧠</span></p>
        </div>
        <button className="cursor-pointer flex gap-2 bg-red-600 text-white py-2 font-medium rounded-md hover:bg-red-600/90 px-4 transtion-all shadow-md hover: duration-150 active:scale-98 hover:-translate-y-0.5 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] group group/arrow">
          Log Out <span><LogOut className="" /></span>
        </button>
      </div>
    </>
  )
}

export default HeaderED