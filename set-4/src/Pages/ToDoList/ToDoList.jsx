import React, { useState } from "react";

const ToDoList = ({ todoItems }) => {
  const [todo, setTodo] = useState(todoItems);

  const handleDelete = (id) => {
    const deletedItem = todo.filter((item) => item.id !== id);
    console.log(deletedItem);
    setTodo(deletedItem);
  };
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Todo List</h1>
      <ul style={{ listStyle: "none" }}>
        {todo.map((item) => (
          <li
            style={{
              textDecoration: item.isDone === true ? "line-through" : null,
            }}
            key={item.id}
          >
            <li style={{ padding: "20px" }}>
              {item.task}{" "}
              <button
                style={{ marginLeft: "15px", fontSize: "40px", width: "150px" }}
                onClick={() => handleDelete(item.id)}
              >
                X
              </button>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
