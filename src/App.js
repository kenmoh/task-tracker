import React, { useState } from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";

const App = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Interview",
      day: "Feb 18th at 2.50pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at work",
      day: "March 1th at 10.30am",
      reminder: true,
    },
    {
      id: 3,
      text: "End of year party event",
      day: "May 20th at 08.00pm",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const hideAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  return (
    <div className="container">
      <Header onAdd={hideAddTaskForm} showAddTaskForm={showAddTaskForm} />
      {showAddTaskForm && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;
