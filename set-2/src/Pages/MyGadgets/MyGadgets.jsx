import React, { useState } from "react";

const MyGadgets = ({ products }) => {
  const [showExpensiveGadgets, setShowExpensiveGadgets] = useState();

  const handleClick = () => setShowExpensiveGadgets(true);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>My Gadgets</h1>

      <ol style={{ listStyle: "none" }}>
        {products.map(({ id, name, description, price }) => (
          <li
            style={{
              backgroundColor: showExpensiveGadgets
                ? price > 50000
                  ? "lightgreen"
                  : null
                : null,
              padding: "20px",
            }}
            key={id}
          >
            {id}. Name: {name} Description: {description} Price: {price}
          </li>
        ))}
      </ol>

      <button
        style={{ fontSize: "40px", borderRadius: "10px" }}
        onClick={handleClick}
      >
        Expensive Gadget's
      </button>
    </div>
  );
};

export default MyGadgets;
