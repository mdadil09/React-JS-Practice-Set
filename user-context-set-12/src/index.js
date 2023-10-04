import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider, UserContext } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export { UserContext };
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
