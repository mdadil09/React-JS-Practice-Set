import React from "react";

const Flowers = ({ bouquet }) => {
  const findRose = bouquet.find(({ flowers }) => flowers.includes("rose"));
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Bouquet With Rose</h1>
      {findRose && (
        <p>
          Price of bouquet with roses :
          <span style={{ color: "red" }}>${findRose.price}</span>
        </p>
      )}
    </div>
  );
};

export default Flowers;
