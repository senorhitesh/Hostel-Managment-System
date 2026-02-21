import React, { useState } from "react";
import Button from "../Auth/Login/Button";
import InputLable from "../Auth/Login/InputLable";
import HeaderED from "./components/Header-ED";
import TaskNoti from "./components/TaskNoti";

const AdminDashboard = ({data}) => {
  const [taskTitle, setTT] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [sumbitted, setSumbitted] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!taskTitle || !description || !date || !assignTo || !category) {
      setSumbitted(true);
      return;
    }
    setSumbitted(false);
    setTT("");
    setPassword("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setSumbitted("");
  };
  return (
    <div className="h-screen max-w-6xl mx-auto py-2">
      <HeaderED data={data}/>
      <div className=" grid grid-rows-1 mt-10 p-4 lg:grid-cols-2">
        <div>
          <form
            onSubmit={(val) => {
              SubmitHandler(val);
            }}
            className="flex flex-col w-full  justify-center gap-2 bg-white p-6  rounded-md shadow-[0px_4px_32px_0_rgba(99,102,241,.10)] hover:shadow-[0px_4px_32px_0_rgba(99,102,241,.15)] transition-all  "
          >
            <h1
              className="
                      inline-block
                      font-primary
                      text-4xl font-bold
                      bg-gradient-to-t
from-[#2C1A4D] 
via-[#6A3FA0] 
to-[#D4AF37]
                      bg-clip-text
                      text-transparent"
            >
              Suthar Samaj Hostel
            </h1>
            <InputLable
              setValue={setTT}
              value={taskTitle}
              name="titleTask"
              type="text"
              placeholder="eg.Maraj ko bhulao"
              label="Task Title"
              submitted={sumbitted}
            />
            <InputLable
              setValue={setDescription}
              value={description}
              name="description"
              type="text"
              placeholder="eg.Coffee wali Chai"
              label="Description"
              submitted={sumbitted}
            />
            <InputLable
              setValue={setDate}
              value={date}
              name="date"
              type="date"
              placeholder="eg.Coffee wali Chai"
              label="Date"
              submitted={sumbitted}
            />
            <InputLable
              setValue={setAssignTo}
              value={assignTo}
              name="addignTask"
              type="text"
              placeholder="eg.Naresh"
              label="Assign to"
              submitted={sumbitted}
            />
            <InputLable
              setValue={setCategory}
              value={category}
              name="category"
              type="text"
              placeholder="Esehi, 2min ru kom etc.."
              label="Category"
              submitted={sumbitted}
            />
            <Button text="Create task" />
            {/* <p className="self-center items-center flex text-gray-400">Don't have an account? <span className="text-bg-500 cursor-pointer hover:text-blue-600 font-medium">Sign Up</span></p> */}
          </form>
        </div>
        <div className=" text-neutral-900 pt-2 px-8 ">
          <h1 className="text-3xl font-bold mb-8 ">Assigned Tasks</h1>
          <div className="flex gap-4 p-3 flex-col h-screen overflow-auto">
            <TaskNoti tag="jaruri" date="Just Now" title="Jaldi Dalji" data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
