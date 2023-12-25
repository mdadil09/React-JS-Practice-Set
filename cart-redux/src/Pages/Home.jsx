import React, { useEffect } from "react";
import "../components/style.css";
import FeaturedProducts from "../components/FeaturedProducts";
import Smartphones from "../components/Smartphones";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import { addToCart } from "../redux/slice/cartSlice";
import Navbar from "../components/Navbar";
import Watches from "../components/Watches";
import Laptops from "../components/Laptops";
import Mens from "../components/Mens";
import Womens from "../components/Womens";
import Groceries from "../components/Groceries";
import Footer from "../components/Footer";

const Home = () => {
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
        <h2>Welcome to redux toolkit store</h2>
        <h2>Featured Products</h2>
        <FeaturedProducts products={products} handleAddCart={handleAddCart} />
        <h2>Smartphones</h2>
        <Smartphones products={products} handleAddCart={handleAddCart} />
        <h2>Watches</h2>
        <Watches products={products} handleAddCart={handleAddCart} />
        <h2>Laptops</h2>
        <Laptops products={products} handleAddCart={handleAddCart} />
        <h2>Mens</h2>
        <Mens products={products} handleAddCart={handleAddCart} />
        <h2>Womens</h2>
        <Womens products={products} handleAddCart={handleAddCart} />
        <h2>Groceries</h2>
        <Groceries products={products} handleAddCart={handleAddCart} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
