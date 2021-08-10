import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}
        <FaTimes
          style={{ color: "red ", cursor: "pointer" }}
          onClick={() => deleteTask(task.id)}
        />
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
