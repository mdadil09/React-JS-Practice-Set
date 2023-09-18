import React from "react";
import { Link } from "react-router-dom";
import "./pageStyle.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Unlock Your Potential: Welcome to Limitless Horizons!</h1>
        <h3>
          Supercharge Your Programming Skills with Our Riveting Video Tutorials
        </h3>
        <div className="home-button">
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #ff2400",
              borderRadius: "8px",
            }}
          >
            About Us
          </button>
          <button
            style={{
              backgroundColor: "#ff2400",
              border: "none",
              borderRadius: "8px",
            }}
          >
            <Link
              to="/videos"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              Watch Videos
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
