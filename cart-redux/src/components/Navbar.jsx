import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="navbar-logo">
        Your Logo
      </a>
      <div className="hamburger-menu">
        <span />
        <span />
        <span />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="cart-icon">
        🛒
        <div className="cart-quantity">3</div>{" "}
        {/* Replace '3' with the actual quantity */}
      </div>
    </div>
  );
};

export default Navbar;
