import React from "react";
import { products } from "../data";

const ProductData = () => {
  return (
    <div className="container">
      <h1>Product List</h1>
      <ul>
        {products.map(({ name, sales, quantity }) =>
          sales > quantity ? (
            <li style={{ fontSize: "24px", padding: "5px" }}>
              Name: {name},Quantity: {quantity}, Sales:{sales}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ProductData;
