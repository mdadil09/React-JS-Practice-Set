import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const ProductCart = () => {
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
      <h1>Product's Cart</h1>
      <div className="buttons">
        {products.map(({ name }) => (
          <button
            key={name}
            style={{
              marginBottom: "10px",
              marginRight: "10px",
              padding: "10px",
              fontSize: "40px",
            }}
            onClick={() =>
              setProducts(products.filter((product) => product.name === name))
            }
          >
            Show {name}
          </button>
        ))}
      </div>
      {products.map(({ name, price, desc, src }) => (
        <div className="product" key={name}>
          <img src={src} height={400} width={600} alt={desc} />
          <h3>Name: {name}</h3>
          <p>Price: {price}</p>
          <p>Description: {desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
