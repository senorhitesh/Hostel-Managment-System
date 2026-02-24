import React from "react";
import TnAccepted from "./TnAccepted";
import TnGiven from "./TnGiven";

const TaskforAdmin = ({
  date,
  title,
  description = `Description not Provided`,
  priority,
  data,
  index,
}) => {
  return (
    <>
      <TnGiven
        date={date}
        title={title}
        description={description}
        priority={priority}
        key={index}
      />
    </>
  );
};

export default TaskforAdmin;
