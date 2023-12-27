import React from "react";
import Card from "../Card/Card";

const Groceries = ({ products, handleAddCart }) => {
  const filteredProducts = products.filter(
    (item) => item.category === "groceries" && item.rating > 4.5
  );
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default Groceries;
