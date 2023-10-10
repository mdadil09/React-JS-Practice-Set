import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
