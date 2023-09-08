import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";
export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [showTodo, setShowTodo] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/todos");
      setShowTodo(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <TodoContext.Provider value={{ showTodo, setShowTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
