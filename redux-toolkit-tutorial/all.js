

//todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

//store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

//Todo.js

import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo";
import { useState } from "react";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const [updatingTodo, setUpdatingTodo] = useState(null);
  const dispatch = useDispatch();

  const updateTodoClick = (todo) => {
    setUpdatingTodo(todo);
  };
  return (
    <>
      <AddTodo onUpdateTodo={setUpdatingTodo} updatingTodo={updatingTodo} />
      <ul className="list-none" style={{ margin: "100px" }}>
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="buttons">
              <button
                type="submit"
                className="text-white bg-indigo-500 mx-1 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
                onClick={() => updateTodoClick(todo)}
              >
                Update
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;

//Addtodo.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import PropTypes from "prop-types";

const AddTodo = ({ onUpdateTodo, updatingTodo }) => {
  const [input, setInput] = useState(updatingTodo ? updatingTodo.text : "");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (updatingTodo) {
      dispatch(updateTodo({ id: updatingTodo, text: input }));
      onUpdateTodo(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 content-center"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updatingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onUpdateTodo: PropTypes.func.isRequired,
  updatingTodo: PropTypes.object,
};

export default AddTodo;
