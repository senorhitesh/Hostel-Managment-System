import React from "react";
import HeaderED from "./components/Header-ED";
import TaskCard from "./components/TaskCard";
import TaskNoti from "./components/TaskNoti";
const EmployeeDashboad = ({ data }) => {
  return (
    <div className="h-screen max-w-6xl mx-auto py-2">
      <HeaderED data={data} />
      <div className="mt-8">
        <TaskCard data={data} />
      </div>
      <div className=" m-4 flex flex-col gap-4 p-4 rounded-xl border border-gray-300 bg-gray-100">
        <h1 className="text-4xl text-neutral-900 font-bold">Tasks</h1>
        {data.tasks.map((task,index) => {
          return (
            <TaskNoti
              key={index}
              title={task.title}
              date={task.date}
              description={task.description}
              tag={task.tag}
              priority={task.priority}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeDashboad;
