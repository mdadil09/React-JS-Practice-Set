import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, setProduct } from "../redux/slice/productSlice";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from "./Navbar";
import { addToCart } from "../redux/slice/cartSlice";
import { getPriceAfterDiscount } from "../config/config";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const getFirstLine = (text) => {
    if (!text) return "";
    return text.length > 50 ? text.substring(0, 50) + "..." : text;
  };

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Navbar />
      <div className="products">
        <h2>Welcome to redux toolkit store</h2>
        <h2>Products</h2>
        <div className="products-wrapper">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-badge">Hot</div>
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
                    <button onClick={() => handleAddCart(item)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
