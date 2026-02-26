import React from "react";
import UserId from "./UserId";

const AllSrudentWrapper = () => {
  return (
    <>
      <div className="bg-gray-50 border border-gray-100  py-8 rounded-3xl px-8 h-screen  flex flex-col gap-2.5">
        <p className="text-5xl font-bold text-neutral-900 mb-6">Current Students</p>
        <UserId/>
      </div>
    </>
  );
}
export default AllSrudentWrapper;
