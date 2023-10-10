import React, { createContext } from "react";

export const UserPreferencesContext = createContext();

export function UserPreferencesProvider({ children }) {
  return (
    <UserPreferencesContext.Provider>
      {children}
    </UserPreferencesContext.Provider>
  );
}
