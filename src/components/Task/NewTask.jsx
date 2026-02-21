import React from "react";

const NewTask = ({ taskCount }) => {
  return (
    <div className="bg-gray-50 hover:bg-gray-100  hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-blue-500  relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
      <p className="text-black text-xl text-shadow-2xs">New Taks 🆕</p>
      <p className="text-6xl font-bold absolute bottom-2 right-5 text-neutral-800">
        {taskCount}
      </p>
    </div>
  );
};

export default NewTask;
