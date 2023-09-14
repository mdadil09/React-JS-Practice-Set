import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";
import { FoodContext } from "../context/FoodContext";

const Navbar = () => {
  const { cart } = useContext(FoodContext);
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
              <NavLink to="/cart">Cart {cart.length}</NavLink>
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
