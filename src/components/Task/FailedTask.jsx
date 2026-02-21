import React from "react";

const FailedTask = ({taskcount}) => {
  return (
    <div className="bg-red-400 hover:bg-red-500 hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-red-900 relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
      <p className="text-white text-xl text-shadow-2xs">Failed ⚠️</p>
      <p className="text-6xl font-bold absolute bottom-2 right-5 text-white">
        {taskcount}
      </p>
    </div>
  );
};

export default FailedTask;
