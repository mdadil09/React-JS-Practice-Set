import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const OpenPage = () => {
  const { showTodo } = useContext(TodoContext);

  const filterdedItems = showTodo.filter((todo) => todo.isCompleted === false);

  return (
    <div
      className="container"
      style={{
        padding: "40px",
        fontSize: "40px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Total Todos Not Done: {filterdedItems.length}</h2>
      {filterdedItems.map(({ id, title, description, isCompleted }) => (
        <div
          className="todo"
          key={id}
          style={{
            width: "30vw",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "15px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>{title}</h3>
          <p>{title}</p>
          <p>{description}</p>
          <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
        </div>
      ))}
      <Link
        style={{
          padding: "10px",
          fontSize: "40px",
          textDecoration: "none",
          border: "1px solid black",
          marginRight: "10px",
          backgroundColor: "#f0f0f0",
        }}
        to="/"
      >
        Show All
      </Link>
    </div>
  );
};

export default OpenPage;
