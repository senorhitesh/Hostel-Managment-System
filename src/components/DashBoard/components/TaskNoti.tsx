import TnAccepted from "./TN/TnAccepted";
import TnFailed from "./TN/TnFailed";
import TnNew from "./TN/TnNew";
const TaskNoti = ({
  date,
  title,
  description = `Description not Provided`,
  priority,
  data,
  index,
}) => {
  return (
    <>
      <TnAccepted
        date={date}
        title={title}
        description={description}
        priority={priority}
        data={data}
        key={index}
      />
    </>
  );
};

export default TaskNoti;
