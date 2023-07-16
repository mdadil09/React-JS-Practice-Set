import React, { useState } from "react";

const Vegetables = ({ vegetables }) => {
  const [showVegetables, setShowVegetables] = useState();

  const handleClick = () => setShowVegetables(true);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Highlight Fresh Vegetables</h1>
      <ol style={{ listStyle: "none" }}>
        {vegetables.map(({ id, name, pickDate }) => (
          <li
            style={{
              backgroundColor: showVegetables
                ? pickDate === "2023-03-30"
                  ? "green"
                  : null
                : null,
              padding: "10px",
            }}
            key={id}
          >
            Name: {name} PickDate: {pickDate}
          </li>
        ))}
      </ol>
      <button
        style={{ padding: "5px", fontSize: "40px", borderRadius: "15px" }}
        onClick={handleClick}
      >
        Show Fresh Vegetables
      </button>
    </div>
  );
};

export default Vegetables;
