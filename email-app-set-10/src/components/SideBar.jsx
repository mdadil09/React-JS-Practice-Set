import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideBar = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-item">
        <ul>
          <li>
            <NavLink to="/">
              Inbox <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/spam">
              Spam <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash">
              Trash <span></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
