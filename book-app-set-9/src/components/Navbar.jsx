import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { favorite, showBook } = useContext(BookContext);
  const filteredData = showBook.filter(({ read }) => read === true);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">Yubooks.com</div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/read">Read{`(${filteredData.length})`}</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorite{`(${favorite.length})`}</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Signin</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
