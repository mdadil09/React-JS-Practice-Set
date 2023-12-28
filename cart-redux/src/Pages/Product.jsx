import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";
import "../components/style.css";
import { fetchCategory } from "../redux/slice/categorySlice";
import Navbar from "../components/Headers/Navbar";
import Submenu from "../components/Headers/Submenu";
import AllProducts from "../components/Products/AllProducts";
import FilteredProducts from "../components/Products/FilteredProducts";
import Footer from "../components/Footer/Footer";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("All Products");
  console.log(category);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategory());
  }, [dispatch]);

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
          <AllProducts products={products} />
        ) : (
          <FilteredProducts
            products={products}
            selectedOption={selectedOption}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
