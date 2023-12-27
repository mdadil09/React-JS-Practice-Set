import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ products, handleAddCart }) => {
  const featuredProducts = products.filter((item) => item.rating >= 4.98);
  return (
    <div className="products-wrapper">
      {featuredProducts.map((item) => (
        <Card products={item} handleAddCart={handleAddCart} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
