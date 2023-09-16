import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Tuts.com</div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="/likedvideos">Liked Videos</NavLink>
            </li>
            <li>
              <NavLink to="/watchlater">Watch Later</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
