import React from "react";
import NewTask from "../../Task/NewTask";
import AcceptTask from "../../Task/AcceptTask";
import CompleteTask from "../../Task/CompleteTask";
import FailedTask from "../../Task/FailedTask";
const TaskCard = ({ data }) => {
  console.log(data);
  const tasks = data?.tasks || [];
  const newTasks = tasks.filter((t) => t.active).length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const acceptedTasks = tasks.filter((t) => t.pending).length;
  const failedTasks = tasks.filter((t) => t.failed).length;
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl p-4">
        <NewTask taskCount={newTasks} />
        <AcceptTask taskcount={acceptedTasks} />
        <CompleteTask taskcount={completedTasks} />
        <FailedTask taskcount={failedTasks} />
      </div>
    </>
  );
};

export default TaskCard;
