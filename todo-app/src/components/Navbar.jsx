import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", fontSize: "40px", textDecoration: "none" }}>
      <NavLink
        style={{ marginRight: "10px", textDecoration: "none", color: "black" }}
        to="/"
      >
        Home ||
      </NavLink>
      <NavLink
        style={{ marginRight: "10px", textDecoration: "none", color: "black" }}
        to="/openpage"
      >
        Open page ||
      </NavLink>
      <NavLink
        style={{ marginRight: "10px", textDecoration: "none", color: "black" }}
        to="/donepage"
      >
        Done Page ||
      </NavLink>
    </nav>
  );
};

export default Navbar;
