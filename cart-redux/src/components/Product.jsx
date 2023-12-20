import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/slice/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div className="products">
      {products.map((item) => (
        <li key={item.id}>
          {item.id} : {item.title}
        </li>
      ))}
    </div>
  );
};

export default Product;
