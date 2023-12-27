import React from "react";
import Card from "../Card/Card";

const Smartphones = ({ products, handleAddCart }) => {
  const filteredSmartPhones = products.filter(
    (item) => item.category === "smartphones" && item.stock > 33
  );
  return (
    <div className="products-wrapper">
      {filteredSmartPhones.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default Smartphones;
