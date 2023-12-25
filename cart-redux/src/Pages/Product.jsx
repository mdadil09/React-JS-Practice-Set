import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import { Link } from "react-router-dom";
import "../components/style.css";
import Navbar from "../components/Navbar";
import { addToCart } from "../redux/slice/cartSlice";
import { getFirstLine, getPriceAfterDiscount } from "../config/config";
import Footer from "../components/Footer";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Navbar />
      <div className="products">
        <h2>All Products</h2>
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
      <Footer />
    </>
  );
};

export default Product;
