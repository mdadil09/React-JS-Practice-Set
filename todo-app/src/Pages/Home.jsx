import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { showTodo, setShowTodo } = useContext(TodoContext);

  const handleClick = (id) => {
    const doneItem = showTodo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });
    setShowTodo(doneItem);
  };
  return (
    <div className="container" style={{ padding: "20px", fontSize: "40px" }}>
      <h1>TODO's APP</h1>
      {showTodo.map((item) => (
        <div className="todo" key={item.id}>
          <h3
            style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
          >
            {item.title}
          </h3>
          <div className="buttons">
            <Link
              style={{
                padding: "10px",
                fontSize: "40px",
                textDecoration: "none",
                border: "1px solid black",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
              }}
              to={`/individualpage/${item.id}`}
            >
              View Details
            </Link>
            <button
              style={{
                padding: "10px",
                fontSize: "40px",
                marginRight: "10px",
              }}
              onClick={() => handleClick(item.id)}
            >
              {item.isCompleted ? "Not Done" : "Mark as Done"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
