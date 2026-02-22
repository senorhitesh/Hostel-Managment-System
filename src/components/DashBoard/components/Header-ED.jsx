import Popup from "./TN/Popup";

const HeaderED = ({ data }) => {

  return (
    <>
      <div className="  px-8 mt-4 justify-between flex items-center  ">
        <div className="flex flex-col py-1">
          <h1 className="text-sm font-medium">Welcome back</h1>
          <p className="text-3xl font-bold ">
            {data.name} <span>🧠</span>
          </p>
        </div>
        <Popup />
      </div>
    </>
  );
};

export default HeaderED;
