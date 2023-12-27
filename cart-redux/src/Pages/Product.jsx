import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import "../components/style.css";
import { addToCart } from "../redux/slice/cartSlice";
import { fetchCategory } from "../redux/slice/categorySlice";
import Navbar from "../components/Headers/Navbar";
import Submenu from "../components/Headers/Submenu";
import AllProducts from "../components/Products/AllProducts";
import FilteredProducts from "../components/Products/FilteredProducts";
import Footer from "../components/Footer/Footer";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(category.firstVal);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  const filteredProducts = products.filter(
    (item) => item.category === selectedOption
  );

  console.log(filteredProducts);

  return (
    <>
      <Navbar />
      <div className="products">
        <Submenu
          category={category}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {selectedOption === "All Products" ? (
          <AllProducts products={products} handleAddCart={handleAddCart} />
        ) : (
          <FilteredProducts
            filteredProducts={filteredProducts}
            handleAddCart={handleAddCart}
            category={category}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
