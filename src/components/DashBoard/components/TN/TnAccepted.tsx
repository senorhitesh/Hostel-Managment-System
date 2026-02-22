import { Check } from "lucide-react";
import { X } from "lucide-react";

const TnAccepted = ({
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
      className="group relative w-full bg-white-200  shadow-lg border border-transparent transtion-all duration-150 hover:shadow-2xl hover:scale-101 hover:bg-gray-50 hover:border-gray-300  p-4 rounded-xl active:scale-99"
    >
      <div className="flex justify-between mb-3 ">
        <p className="bg-blue-800 text-white px-3 rounded-xl">On going</p>
        <p>{date}</p>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <p className="text-2xl text-gray-900 font-bold"> {title}</p>{" "}
          <p className="border px-3 border-gray-500 rounded-md text-red-500">
            {priority}
          </p>
        </div>
        <p>{description}</p>
      </div>
      <div className="absolute bottom-4 right-2  gap-2 hidden group-hover:flex ">
        <button className="border border-gray-300 py-1 transition delay-150 bg-gray-50 rounded-2xl px-3 font-medium hover:bg-green-800 text-gray-600 hover:text-white  flex align-middle justify-center gap-1.5">
          Mark as Complete{" "}
          <span>
            <Check width={20} />
          </span>
        </button>
        <button className="border border-gray-300 py-1 transition delay-150 bg-gray-50 rounded-2xl px-3 font-medium hover:bg-red-800 text-gray-600 hover:text-white  flex align-middle justify-center gap-1.5">
          Mark as Failed{" "}
          <span>
            <X width={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TnAccepted;
