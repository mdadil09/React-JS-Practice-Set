import React, { useState } from "react";
import { createContext } from "react";
import { translations, users } from "../data/data";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState(users);
  const [isOpen, setIsOpen] = useState(false);
  const [transData, setTransData] = useState(translations);

  const transDataMapped = Object.keys(transData);

  console.log(transDataMapped);

  console.log(transData[transDataMapped].hello);

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

  console.log(arr);

  return (
    <UserContext.Provider
      value={{ data, arr, setData, filterItems, handleName, handleChange }}
    >
      {children}
    </UserContext.Provider>
  );
}
