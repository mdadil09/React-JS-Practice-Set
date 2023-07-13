import React from "react";

const DisplayName = ({ name }) => {
  return (
    <div
      className="container"
      style={{
        padding: "60px",
        fontSize: "40px",
        color: "green",
        textAlign: "center",
      }}
    >
      <h1>Greeting</h1>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default DisplayName;
