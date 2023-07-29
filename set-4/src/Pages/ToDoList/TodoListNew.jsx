import React, { useState } from "react";

const ToDoList1 = ({ todoItems1 }) => {
  const [todo, setTodo] = useState(todoItems1);

  const handleClick = (id) => {
    const doneItem = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setTodo(doneItem);
  };
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Todo List New</h1>
      <ul style={{ listStyle: "none" }}>
        {todo.map((item) => (
          <li
            style={{
              textDecoration: item.isDone === true ? "line-through" : null,
              color: item.isDone === true ? "red" : null,
            }}
            key={item.id}
          >
            <li style={{ padding: "20px" }}>
              {item.task}{" "}
              <button
                style={{ marginLeft: "15px", fontSize: "40px", width: "300px" }}
                onClick={() => handleClick(item.id)}
              >
                Mark as done
              </button>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList1;
