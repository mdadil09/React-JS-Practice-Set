import React from "react";

const Phones = ({ products }) => {
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Mobile Phones</h1>
      <ul style={{ listStyle: "none" }}>
        {products.map(({ id, name, description, price }) =>
          name === "mobile" ? (
            <li key={id}>
              Name: {name} Description: {description} Price: {price}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Phones;
