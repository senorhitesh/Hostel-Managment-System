import React from "react";
import HeaderED from "./components/Header-ED";
import TaskCard from "./components/TaskCard";
const EmployeeDashboad = () => {
  return (
    <div className="h-screen max-w-6xl mx-auto py-2">
      <HeaderED />
      <div className="mt-8">
        <TaskCard/>
      </div>
      <div className=" m-4"> 
        <div className="w-full bg-[#FFFFF0]  shadow-lg border border-transparent transtion-all duration-150 hover:shadow-2xl hover:scale-101 hover:bg-gray-100 hover:border-gray-300  p-4 rounded-xl active:scale-99">
          <div className="flex justify-between mb-3 ">
            <p className="bg-green-800 text-white px-3  rounded-xl">New</p>
            <p>16-02-2026</p>
          </div>
          <div>
            <p className="text-2xl text-gray-900 font-bold"> Title</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboad;
