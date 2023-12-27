import React, { useEffect } from "react";
import "../components/style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import { addToCart } from "../redux/slice/cartSlice";
import Navbar from "../components/Headers/Navbar";
import HeroCarsoul from "../components/Headers/HeroCarsoul";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Smartphones from "../components/Products/Smartphones";
import Watches from "../components/Products/Watches";
import Laptops from "../components/Products/Laptops";
import Mens from "../components/Products/Mens";
import Womens from "../components/Products/Womens";
import Groceries from "../components/Products/Groceries";
import Footer from "../components/Footer/Footer";

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
        <HeroCarsoul />
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
