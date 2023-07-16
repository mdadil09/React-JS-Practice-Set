import React from "react";

const Cars = ({ cars }) => {
  let getCategory = cars.reduce((acc, { category }) => {
    acc[category] ? (acc[category] += 1) : (acc[category] = 1);
    return acc;
  }, {});
  return (
    <div className="containe" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Car's Category</h1>
      {Object.keys(getCategory).map((category, i) => (
        <p key={i}>
          {category} : {getCategory[category]}
        </p>
      ))}
    </div>
  );
};

export default Cars;
