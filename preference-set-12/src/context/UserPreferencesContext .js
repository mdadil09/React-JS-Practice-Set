import React, { createContext, useState } from "react";

import { data } from "../data/themeData";

export const UserPreferencesContext = createContext();

export function UserPreferencesProvider({ children }) {
  const [preference, setPreference] = useState({
    fontSize: "medium",
    theme: "light",
  });

  const handlePref = (pref, type) => {
    type === "font-size"
      ? setPreference({ ...preference, fontSize: pref })
      : setPreference({ ...preference, theme: pref });
  };

  return (
    <UserPreferencesContext.Provider value={{ preference, handlePref, data }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}
