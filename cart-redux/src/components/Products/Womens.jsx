import React from "react";
import Card from "../Card/Card";

const Womens = ({ products, handleAddCart }) => {
  const filteredProducts = products.filter(
    (item) =>
      (item.category === "womens-dresses" ||
        item.category === "womens-watches") &&
      item.rating > 4.6
  );
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default Womens;
