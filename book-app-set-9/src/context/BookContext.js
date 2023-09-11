import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [showBook, setShowBook] = useState([]);
  const [user, setUser] = useState({});

  const getBookData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      setShowBook(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <BookContext.Provider value={{ showBook, setShowBook }}>
      {children}
    </BookContext.Provider>
  );
}
