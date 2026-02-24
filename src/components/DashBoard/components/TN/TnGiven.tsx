import React from 'react'
const TnGiven = ({
  date,
  title,
  description = `Description not Provided`,
  priority,
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
          <p className="border px-3 border-gray-500 rounded-md text-neutral-900 font-medium">
            {priority}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TnGiven;
