import React from "react";
import { products } from "../data";

const ProductData = () => {
  return (
    <div className="container" style={{ padding: "100px" }}>
      <h1>Product's Names</h1>
      <ul>
        {products.map((product) => (
          <li style={{ fontSize: "24px", padding: "5px" }}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductData;
