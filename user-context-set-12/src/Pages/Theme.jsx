import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Theme = () => {
  const { handleThemeChange, theme } = useContext(UserContext);

  return (
    <div
      className="container"
      style={{ border: "1px solid black", height: "400px" }}
    >
      <button onClick={handleThemeChange}>Change Theme</button>
    </div>
  );
};

export default Theme;
