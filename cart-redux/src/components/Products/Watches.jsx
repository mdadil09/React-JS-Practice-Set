import React from "react";
import Card from "../Card/Card";

const Watches = ({ products }) => {
  const filteredSmartPhones = products.filter(
    (item) => item.category === "mens-watches" && item.rating > 4.5
  );
  return (
    <div className="products-wrapper">
      {filteredSmartPhones.map((item) => (
        <Card products={item} />
      ))}
    </div>
  );
};

export default Watches;
