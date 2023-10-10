import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : "light"}>
      <div className="content">
        <h1>Theme Switcher</h1>
        <h3>Current Theme: {theme ? "dark" : "light"}</h3>
        <button onClick={changeTheme}>Change Theme!</button>
      </div>
    </div>
  );
}

export default App;
