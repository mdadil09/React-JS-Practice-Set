import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ForumProvider, ForumContext } from "./context/ForumContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

export { ForumContext };
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ForumProvider>
        <App />
      </ForumProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
