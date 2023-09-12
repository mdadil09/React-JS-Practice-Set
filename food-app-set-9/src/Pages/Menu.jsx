import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import "./pageStyle.css";

const Menu = () => {
  const { food, handleCartUpdate } = useContext(FoodContext);
  const veg = food.filter((item) => item.is_vegetarian === true);
  const spicy = food.filter((item) => item.is_spicy === true);
  return (
    <>
      <div className="menu-search">
        <h1 style={{ fontSize: "40px", margin: 0 }}>Menu</h1>
        <input type="text" placeholder="search..." />
        <select name="Select">
          <option>Select</option>
          <option value={veg}>Veg</option>
          <option value={spicy}>Spicy</option>
        </select>
        <select name="Select">
          <option>Sort by Price</option>
          <option value="">Low to High</option>
          <option value="">High to Low</option>
        </select>
      </div>
      <div className="menu-container">
        {food.map((item) => {
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
