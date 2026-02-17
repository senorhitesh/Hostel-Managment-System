import React from "react";

const TaskCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl p-4">
        <div className="bg-gray-100 hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-blue-500  relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
          <p className="text-black text-xl text-shadow-2xs">New Taks 🆕</p>
          <p className="text-6xl font-bold absolute bottom-2 right-5 text-neutral-800">
            0
          </p>
        </div>
        <div className="bg-emerald-500 hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-green-900 relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
          <p className="text-white text-xl text-shadow-2xs">Completed ✅</p>
          <p className="text-6xl font-bold absolute bottom-2 right-5 text-white">
            0
          </p>
        </div>
        <div className="bg-orange-500 hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-orange-900 relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
          <p className="text-white text-xl text-shadow-2xs">Pending ⌛</p>
          <p className="text-6xl font-bold absolute bottom-2 right-5 text-white">
            0
          </p>
        </div>
        <div className="bg-red-500 hover:-translate-y-1 transtion duration-150 hover:shadow-2xl border-2 border-transparent hover:border-red-900 relative  flex rounded-md h-[150px] p-4 m-1 active:scale-98 ">
          <p className="text-white text-xl text-shadow-2xs">Failed ⚠️</p>
          <p className="text-6xl font-bold absolute bottom-2 right-5 text-white">
            0
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
