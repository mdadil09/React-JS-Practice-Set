import React from "react";
import Card from "../Card/Card";

const AllProducts = ({ products, handleAddCart }) => {
  return (
    <div className="products-wrapper">
      {products.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default AllProducts;
