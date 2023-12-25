import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const item = useSelector((state) => state.cart.carts);

  return (
    <div className="navbar">
      <Link to="#" className="navbar-logo">
        Redux Store
      </Link>
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
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
