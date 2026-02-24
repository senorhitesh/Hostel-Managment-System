import React from "react";
import UserId from "./UserId";

const AllSrudentWrapper = () => {
  return (
    <>
      <div className="bg-gray-100  py-2 px-4 h-screen  flex flex-col gap-2.5">
        <p className="text-5xl font-bold text-neutral-900 mb-6">Current Students</p>
        <UserId/>
        <UserId/>

      </div>
    </>
  );
};

export default AllSrudentWrapper;
