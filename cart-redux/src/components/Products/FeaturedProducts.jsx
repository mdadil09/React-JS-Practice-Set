import React from "react";
import { Link } from "react-router-dom";
import { getFirstLine, getPriceAfterDiscount } from "../../config/config";

const FeaturedProducts = ({ products, handleAddCart }) => {
  const featuredProducts = products.filter((item) => item.rating >= 4.98);
  return (
    <div className="products-wrapper">
      {featuredProducts.map((item) => (
        <div className="product-card" key={item.id}>
          <div className="product-badge">{item.rating.toFixed(1)} ⭐</div>
          <div className="product-tumb">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{item.category}</span>
            <h4>
              <Link href="">{item.title}</Link>
            </h4>
            <p style={{ fontSize: "8px", margin: 0 }}>
              {getFirstLine(item.description)}
            </p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>${item.price}</small>$
                {getPriceAfterDiscount(item.price, item.discountPercentage)}
              </div>
              <div className="product-links">
                <button onClick={() => handleAddCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
