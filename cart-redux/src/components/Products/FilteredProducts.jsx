import React from "react";
import Card from "../Card/Card";

const FilteredProducts = ({ products, handleAddCart, selectedOption }) => {
  const filteredProducts = products.filter(
    (item) => item.category === selectedOption
  );
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default FilteredProducts;
