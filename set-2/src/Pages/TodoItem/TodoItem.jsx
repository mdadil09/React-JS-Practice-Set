import React from "react";

const TodoItem = ({ todoItems }) => {
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      {todoItems.map(({ id, title, description, isCompleted }) => (
        <div className="display" key={id}>
          <h1 style={{ color: isCompleted ? "green" : "red" }}>{title}</h1>
          <p style={{ color: isCompleted ? "green" : "red" }}>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
