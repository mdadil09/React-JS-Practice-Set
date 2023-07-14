import React from "react";

const DisplayName = ({ name }) => {
  return (
    <div
      className="container"
      style={{
        padding: "60px",
        fontSize: "40px",
        textAlign: "center",
      }}
    >
      <h1>Greeting</h1>
      <p style={{ color: "green" }}>Hello, {name}!</p>
    </div>
  );
};

export default DisplayName;
