import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Products</h1>
      <button
        onClick={() =>
          setProducts(products.filter(({ quantity }) => quantity > 20))
        }
        style={{ marginTop: "10px", padding: "5px", fontSize: "40px" }}
      >
        Show Products With Quantity More Than 20
      </button>
      <ul style={{ listStyle: "none" }}>
        {products &&
          products?.map(({ name, price, quantity }) => (
            <li key={name}>
              Name: {name} Price: {price} Quantity: {quantity}
            </li>
          ))}
      </ul>
      <button
        onClick={() => setProducts(products.filter(({ price }) => price < 100))}
        style={{ marginTop: "10px", padding: "5px", fontSize: "40px" }}
      >
        Show Products With Price Less Than 100.
      </button>
    </div>
  );
};

export default Products;
