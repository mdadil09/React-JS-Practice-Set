import React, { useState } from "react";
import { createContext } from "react";
import { translations, users } from "../data/data";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState(users);
  const [isOpen, setIsOpen] = useState(false);
  const [transData, setTransData] = useState(translations);

  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  const arr = data.map((item) => item.name);

  const filterItems = isOpen
    ? data.filter((item) => item.name === isOpen)
    : data;

  const handleName = (name) => {
    setIsOpen(name);
  };

  const handleChange = (e) => {
    handleName(e.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        arr,
        setData,
        filterItems,
        handleName,
        handleChange,
        transData,
        language,
        changeLanguage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
