import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ padding: "40px", fontSize: "40px" }}>
      <h1>Welcome Jhon!</h1>
      <Link to="/question">Show Question List</Link>
    </div>
  );
};

export default Home;
