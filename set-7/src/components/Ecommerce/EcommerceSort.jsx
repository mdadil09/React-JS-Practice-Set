import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const EcommerceSort = () => {
  const [showProducts, setShowProducts] = useState([]);
  const [reset, setReset] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      setShowProducts(res.data.products);
      setReset(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAsc = () => {
    setShowProducts([...showProducts].sort((a, b) => a.price - b.price));
  };

  const handleClickDsc = () => {
    setShowProducts([...showProducts].sort((a, b) => b.price - a.price));
  };

  const handleClickReset = () => {
    setShowProducts(reset);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Ecommerce</h1>
      <div className="buttons">
        <button
          style={{ padding: "10px", fontSize: "40px", marginRight: "10px" }}
          onClick={handleClickAsc}
        >
          Low to High
        </button>
        <button
          style={{ padding: "10px", fontSize: "40px", marginRight: "10px" }}
          onClick={handleClickDsc}
        >
          High to Low
        </button>
        <button
          style={{ padding: "10px", fontSize: "40px", marginRight: "10px" }}
          onClick={handleClickReset}
        >
          Reset
        </button>
      </div>
      {showProducts?.map(({ name, description, price, quantity }) => (
        <div className="info">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
          <p>{quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default EcommerceSort;
