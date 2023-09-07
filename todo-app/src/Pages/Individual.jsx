import React, { useContext } from "react";
import { useParams } from "react-router";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const Individual = () => {
  const { id } = useParams();
  const { showTodo } = useContext(TodoContext);

  const item = showTodo.find((item) => item.id === parseInt(id, 36));
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
      {item && (
        <div
          className="todo"
          key={item.id}
          style={{
            width: "30vw",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "15px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Status: {item.isCompleted ? "Done" : "Not Done"}</p>
        </div>
      )}

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

export default Individual;
