import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">Profile ||</NavLink>
      <NavLink to="/notes">Notes ||</NavLink>
      <NavLink to="/settings">Settings </NavLink>
    </div>
  );
};

export default Navbar;
