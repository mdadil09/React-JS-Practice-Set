import React from "react";
import hero from "../assests/hero.png";
import "./pageStyle.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1> Welcome to Yucha Food ordering website.</h1>
        <p> "Savor the Flavor, Click to Satisfy!"</p>
        <Link to="/menu">
          {" "}
          <button>Order Ease</button>
        </Link>
      </div>
      <div className="img">
        <img src={hero} alt="food" />
      </div>
    </div>
  );
};

export default Home;
