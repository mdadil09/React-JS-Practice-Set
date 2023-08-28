import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const SortByRating = () => {
  const [showProducts, setShowProducts] = useState([
    {
      query: "",
      lists: [],
    },
  ]);

  const getProducts = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      setShowProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setShowProducts([...showProducts].sort((a, b) => b.rating - a.rating));
  };

  const handleChange = (e) => {
    const filteredItem = showProducts.filter(({ name }) => {
      if (e.target.value === "") return showProducts;
      return name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setShowProducts(filteredItem);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Products</h1>
      <button
        style={{ padding: "10px", fontSize: "40px" }}
        onClick={handleClick}
      >
        Sort By Rating
      </button>
      <input
        style={{ padding: "10px", fontSize: "40px", marginLeft: "20px" }}
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={showProducts.query}
      ></input>
      {showProducts.map(({ id, name, price, quantity, rating }) => (
        <div
          className="info"
          style={{
            width: "40%",
            borderRadius: "2px solid lightgray",
            padding: "10px",
            margin: "5px",
            backgroundColor: "lightgray",
          }}
          key={id}
        >
          <p>{name}</p>
          <p>
            <b>Price:</b> {price}
          </p>
          <p>
            <b>Quantity:</b> {quantity}
          </p>
          <p>
            <b>rating:</b> {rating}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SortByRating;
