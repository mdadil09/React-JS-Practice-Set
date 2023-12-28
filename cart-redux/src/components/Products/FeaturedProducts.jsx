import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.filter((item) => item.rating >= 4.98);
  return (
    <div className="products-wrapper">
      {featuredProducts.map((item) => (
        <Card products={item} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
