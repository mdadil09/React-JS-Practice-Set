import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Yucha</div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/myorder">Orders</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
