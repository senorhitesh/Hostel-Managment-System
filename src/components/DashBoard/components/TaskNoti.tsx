import React from "react";

const TaskNoti = ({tag,date,title,description = `Description not Provided`}) => {
  return (
    <>
      <div className="w-full bg-[#FFFFF0]  shadow-lg border border-transparent transtion-all duration-150 hover:shadow-2xl hover:scale-101 hover:bg-gray-100 hover:border-gray-300  p-4 rounded-xl active:scale-99">
        <div className="flex justify-between mb-3 ">
          <p className="bg-green-800 text-white px-3  rounded-xl">{tag}</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="text-2xl text-gray-900 font-bold"> {title}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TaskNoti;
