import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import "./pageStyle.css";
import { useState } from "react";

const Menu = () => {
  const { food, handleCartUpdate } = useContext(FoodContext);
  const [isVegOpen, setIsVegOpen] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const arr = ["Veg", "Spicy"];

  const handleFood = (foodTaste) => {
    setIsVegOpen(foodTaste);
  };

  const handleChange = (e) => {
    handleFood(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedFoodItems = food.slice().sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const veg = sortedFoodItems.filter((item) => {
    if (isVegOpen === "all") {
      return true; // Display all items
    } else if (isVegOpen === "Veg") {
      return item.is_vegetarian === true;
    } else if (isVegOpen === "Spicy") {
      return item.is_spicy === true;
    }
    return true;
  });

  const searchFilteredFoodItems = veg.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="menu-search">
        <h1 style={{ fontSize: "40px", margin: 0 }}>Menu</h1>
        <input
          type="text"
          placeholder="search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select name="Select" onChange={handleChange}>
          <option value="">All</option>
          {arr.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="Select" onChange={handleSortChange}>
          <option value="all">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="menu-container">
        {searchFilteredFoodItems.map((item) => {
          function handleCartClick() {
            handleCartUpdate(item);
          }

          return (
            <div className="card">
              <img
                src={item.image}
                alt="food"
                style={{ width: "600px", height: "600px" }}
              />
              <h1>{item.name}</h1>
              <p className="price">${item.price}</p>
              <p className="desc">{item.description}</p>
              <p className="desc">{item.delivery_time} min</p>
              <p style={{ margin: 0 }}>
                <button onClick={() => handleCartClick(item.id)}>
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
