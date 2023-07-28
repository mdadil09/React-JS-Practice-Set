import React, { useState } from "react";

const DisplayVegetable = ({ itemList }) => {
  const [showFilteredItem, setshowFilteredItem] = useState(null);
  const filterItem = showFilteredItem
    ? itemList.filter((item) => item.category === showFilteredItem)
    : itemList;
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Item List</h1>
      <div className="buttons">
        <button
          style={{ marginRight: "10px", width: "250px", fontSize: "40px" }}
          onClick={() => setshowFilteredItem(null)}
        >
          All
        </button>
        <button
          style={{ marginRight: "10px", width: "250px", fontSize: "40px" }}
          onClick={() => setshowFilteredItem("Fruit")}
        >
          Fruits
        </button>
        <button
          style={{ marginRight: "10px", width: "250px", fontSize: "40px" }}
          onClick={() => setshowFilteredItem("Vegetable")}
        >
          Vegetables
        </button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {filterItem.map(({ id, name, category }) => (
          <li
            key={id}
            style={{ color: category === "Fruit" ? "orange" : "green" }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayVegetable;
