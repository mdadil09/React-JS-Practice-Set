import React, { useEffect, useState } from "react";
import { fakeFetch } from "./api";

const SearchBar = () => {
  const [apiData, setApiData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      setApiData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = apiData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(apiData);
    }
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Products</h1>
      <input
        style={{ padding: "10px", fontSize: "40px", marginLeft: "20px" }}
        type="text"
        placeholder="Search..."
        //value={value}
        onChange={(e) => searchItems(e.target.value)}
      ></input>
      {searchInput.length > 1
        ? filteredResults.map((pro) => (
            <div
              className="info"
              style={{
                width: "40%",
                borderRadius: "2px solid lightgray",
                padding: "10px",
                margin: "5px",
                backgroundColor: "lightgray",
              }}
              key={pro.id}
            >
              <p>{pro.name}</p>
              <p>
                <b>Price:</b> {pro.price}
              </p>
              <p>
                <b>Quantity:</b> {pro.quantity}
              </p>
              <p>
                <b>rating:</b> {pro.rating}
              </p>
            </div>
          ))
        : apiData.map((pro) => (
            <div
              className="info"
              style={{
                width: "40%",
                borderRadius: "2px solid lightgray",
                padding: "10px",
                margin: "5px",
                backgroundColor: "lightgray",
              }}
              key={pro.id}
            >
              <p>{pro.name}</p>
              <p>
                <b>Price:</b> {pro.price}
              </p>
              <p>
                <b>Quantity:</b> {pro.quantity}
              </p>
              <p>
                <b>rating:</b> {pro.rating}
              </p>
            </div>
          ))}
    </div>
  );
};

export default SearchBar;
