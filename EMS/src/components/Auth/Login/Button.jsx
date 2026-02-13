import React from "react";
import { MoveRight } from "lucide-react";
const Button = () => {
  return (
    <>
      <button className="mt-2 bg-[#111] text-white py-3 rounded-md hover:bg-black/90 transtion-all shadow-md hover: duration-150 active:scale-98 hover:-translate-y-0.5 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] group group/arrow">
        <div className="relative overflow-hidden">
          <p className="flex justify-center gap-2 group text-lg items-center group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {" "}
            Login{" "}
            <span>
              <MoveRight className=" transition ease-out" />
            </span>
          </p>
          <p className="inset-0 absolute flex justify-center gap-2 group text-lg items-center  top-13 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/arrow:delay-200 ">
            {" "}
            Login{" "}
            <span>
              <MoveRight className="group-hover:translate-x-1 transition ease-out" />
            </span>
          </p>
        </div>
      </button>
    </>
  );
};

export default Button;
