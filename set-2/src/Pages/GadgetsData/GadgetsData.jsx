import React from "react";

const GadgetsData = ({ products }) => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", fontSize: "40px", padding: "60px" }}
    >
      <h1>Gadegt's Data</h1>
      <ol style={{ listStyle: "none" }}>
        {products.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={{
              border: price > 50000 ? "4px solid darkgreen" : null,
              padding: "10px",
            }}
          >
            Name: {name} Description: {description} Price: {price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GadgetsData;
