import React from "react";
import { Trash } from 'lucide-react';

const TnFailed = () => {
  return (
    <div className="absolute bottom-4 right-2  gap-2 hidden group-hover:flex ">
      <button className="border border-gray-300 py-1 transition delay-150 bg-gray-50 rounded-2xl px-3 font-medium hover:bg-green-800 text-gray-800 hover:text-white w-full flex">
        Delete{" "}
        <span>
         <Trash />
        </span>
      </button>
    </div>
  );
};

export default TnFailed;
