import React from "react";

const items = ["pen", "pencil", "ruler", "eraser"];

const StationeryItems = ({ Header }) => {
  return (
    <div className="container">
      <h1 style={{ color: "Red" }}>{Header}</h1>
      <ol>
        {items.map((item) => (
          <li style={{ fontSize: "24px", padding: "5px" }}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default StationeryItems;
