import React from "react";
import Card from "../Card/Card";

const Laptops = ({ products }) => {
  const filteredSmartPhones = products.filter(
    (item) => item.category === "laptops" && item.rating >= 4.4
  );
  return (
    <div className="products-wrapper">
      {filteredSmartPhones.map((item) => (
        <Card products={item} />
      ))}
    </div>
  );
};

export default Laptops;
