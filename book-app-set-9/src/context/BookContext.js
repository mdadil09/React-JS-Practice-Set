import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [showBook, setShowBook] = useState([]);
  const [user, setUser] = useState({});
  const [favorite, setFavorite] = useState([]);

  const getBookData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      setShowBook(res.data.books);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookData();
    getUserData();
  }, []);

  const handleFavorite = (fav) => {
    setFavorite((favo) => [...favo, fav]);
  };

  const removeFromFav = (id) => {
    const book = favorite.filter((item) => item.id !== id);
    setFavorite(book);
  };

  return (
    <BookContext.Provider
      value={{
        showBook,
        setShowBook,
        favorite,
        handleFavorite,
        user,
        removeFromFav,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
