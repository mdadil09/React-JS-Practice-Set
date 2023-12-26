import React from "react";
import hero from "../assests/4.jpg";
import { Link } from "react-router-dom";

const HeroCarsoul = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left-side">
          <h1 className="hero-text">
            {" "}
            Discover the Latest <br></br> Winter Collection 2024
          </h1>
          <p className="hero-secondary-text">
            Explore our curated collection of stylish<br></br> and high-quality
            clothing. Find the perfect outfit for<br></br> every occasion and
            stay ahead in fashion.
          </p>
          <Link style={{ textDecoration: "none" }} to="/products">
            <button class="hero-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroCarsoul;
