import React, { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState();

  const handleClick = () => setShowLearning(true);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>{heading}</h1>
      <h3>{name}</h3>
      <button
        style={{ fontSize: "40px", borderRadius: "10px" }}
        onClick={handleClick}
      >
        Know More
      </button>
      {showLearning ? <p style={{ color: "Red" }}>{learning}</p> : null}
    </div>
  );
};

export default About;
