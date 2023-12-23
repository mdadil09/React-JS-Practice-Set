import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const item = useSelector((state) => state.cart.carts);

  return (
    <div className="navbar">
      <a href="#" className="navbar-logo">
        Redux Store
      </a>
      <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
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
      <Link className="cart-icon" to="/cart">
        🛒
        <div className="cart-quantity">{item.length}</div>{" "}
      </Link>
    </div>
  );
};

export default Navbar;
