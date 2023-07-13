import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", fontSize: "40px", padding: "60px" }}
    >
      <h1>Product Card</h1>
      <p>
        <span style={{ color: "blue", fontWeight: "bold" }}>{name}</span> :{" "}
        <span style={{ color: "green", fontStyle: "italic" }}>{price}</span>
      </p>
    </div>
  );
};

export default ProductCard;
