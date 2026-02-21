import React from "react";
import HeaderED from "./components/Header-ED";
import TaskCard from "./components/TaskCard";
import TaskNoti from "./components/TaskNoti";
const EmployeeDashboad = ({data}) => {
  console.log(data)
  return (
    <div className="h-screen max-w-6xl mx-auto py-2">
      <HeaderED />
      <div className="mt-8">
        <TaskCard />
      </div>
      <div className=" m-4 flex flex-col gap-4 p-4 rounded-xl border border-gray-300 bg-gray-100">
        <h1 className="text-4xl text-neutral-900 font-bold">Tasks</h1>
        <TaskNoti tag="New" date="Just Now" title="Nasta Karo" description="Jaldi Uth ke Nasta Karna Chahiye" priority="High"/>
      </div>
    </div>
  );
};

export default EmployeeDashboad;
