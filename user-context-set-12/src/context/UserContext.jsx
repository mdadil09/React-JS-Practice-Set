import React, { useState } from "react";
import { createContext } from "react";
import { users } from "../data/data";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState(users);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
}
