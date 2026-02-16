import React from "react";
import HeaderED from "./components/Header-ED";
import TaskCard from "./components/TaskCard";
const EmployeeDashboad = () => {
  return (
    <div className="bg-red-100 h-screen max-w-6xl mx-auto py-2">
      <HeaderED />
      <div className="bg-red-200 mt-8">
        <TaskCard/>
      </div>
      <div className=" m-4">
        <div className="w-full bg-red-300 p-4 rounded-xl">
          <div className="flex justify-between mb-3 ">
            <p className="bg-green-800 text-white px-3  rounded-xl">New</p>
            <p>16-02-2026</p>
          </div>
          <div>
            <p>Title</p>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboad;
