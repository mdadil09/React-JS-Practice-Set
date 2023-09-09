import React from "react";
import "./styleHome.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="box">
      <div className="content">
        <h1>My Mail Box</h1>
      </div>
      <div className="link">
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/sent">Sent</NavLink>
      </div>
    </div>
  );
};

export default Home;
