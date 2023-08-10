import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const Todo = () => {
  const [todoData, setTodoData] = useState([]);

  const getTodoData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setTodoData(data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Todo's</h1>
      {todoData.map((todo) => (
        <div className="data" key={todo.title}>
          <h2>
            {todo.title}: {todo.desc}
          </h2>
          <div>
            <ol style={{ margin: "40px" }}>
              {todo.todos.map((i) => (
                <li style={{ padding: "10px" }}>{i}</li>
              ))}
            </ol>
            <hr style={{ border: "2px solid gray" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
