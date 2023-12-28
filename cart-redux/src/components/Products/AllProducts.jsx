import React from "react";
import Card from "../Card/Card";

const AllProducts = ({ products }) => {
  return (
    <div className="products-wrapper">
      {products.map((item) => (
        <Card products={item} />
      ))}
    </div>
  );
};

export default AllProducts;
