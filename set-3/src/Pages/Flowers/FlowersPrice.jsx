import React from "react";

const FlowersPrice = ({ bouquet }) => {
  const priceOfBouquet = bouquet.filter(({ price }) => price > 2000);
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Price of Bouquet</h1>
      <ol style={{ listStyle: "none" }}>
        {priceOfBouquet.map(({ id, flowers }) => (
          <li key={id}>
            {flowers.map((flower) => (
              <li style={{ padding: "10px" }} key={flower}>
                {flower}
              </li>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FlowersPrice;
