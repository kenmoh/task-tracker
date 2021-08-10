import NoTask from "./NoTask";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, onToggle }) => {
    return (
        <>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        onToggle={onToggle}
                    />
                ))
            ) : (
                <NoTask />
            )}
        </>
    );
};

export default Tasks;
