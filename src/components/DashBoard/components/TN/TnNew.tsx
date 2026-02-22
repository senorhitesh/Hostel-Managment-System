import { Check } from "lucide-react";
import { X } from "lucide-react";

const TnNew = ({
  date,
  title,
  description = `Description not Provided`,
  priority,
  data,
  index,
}) => {
  return (
    <div
      key={index}
      className="group relative w-full bg-purple-100  shadow-lg border border-transparent transtion-all duration-150 hover:shadow-2xl hover:scale-101 hover:bg-gray-100 hover:border-gray-300  p-4 rounded-xl active:scale-99"
    >
      <div className="flex justify-between mb-3 ">
        <p className="bg-green-800 text-white px-3 rounded-xl">New</p>
        <p>{date}</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <p className="text-2xl text-gray-900 font-bold"> {title}</p>{" "}
          <p className="border px-3 border-red-500 rounded-md text-red-500">
            {priority}
          </p>
        </div>
        <p>{description}</p>
      </div>
      <div className="absolute bottom-4 right-2  gap-2 hidden group-hover:flex ">
        <button className="border border-gray-300 py-1 transition delay-150 bg-gray-50 rounded-2xl px-3 font-medium hover:bg-green-800 text-gray-800 hover:text-white w-full flex">
          Accpet{" "}
          <span>
            <Check />
          </span>
        </button>

        <button className="border border-gray-300 py-1 transition delay-150 bg-gray-50 rounded-2xl px-3 font-medium hover:bg-red-800 text-gray-800 hover:text-white w-full flex">
          Decline{" "}
          <span>
            <X />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TnNew;
