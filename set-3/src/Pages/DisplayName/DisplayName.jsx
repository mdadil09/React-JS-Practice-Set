import React from "react";

const DisplayName = ({ cartoons }) => {
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Display Cartoon Name</h1>
      {cartoons.map(({ id, name, superpower, magnitude }) =>
        magnitude % 2 === 0 ? (
          <h3 style={{ padding: "10px" }} key={id}>
            Name: <span style={{ color: "red" }}>{name}</span>
          </h3>
        ) : null
      )}
    </div>
  );
};

export default DisplayName;
