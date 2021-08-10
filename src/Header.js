import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAddTaskForm }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAddTaskForm ? "red" : "green"}
        text={showAddTaskForm ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
