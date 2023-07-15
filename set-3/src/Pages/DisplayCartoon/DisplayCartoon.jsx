import React from "react";
import { cartoons } from "../../data";

const DisplayCartoon = ({ cartoons }) => {
  const filterCartoons = cartoons.filter(
    ({ superpower }) => superpower === "Intelligence"
  );
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Intelligent Cartoon</h1>
      <ul style={{ listStyle: "none" }}>
        {filterCartoons.map(({ id, name, superpower, magnitude }) => (
          <li style={{ padding: "10px", fontWeight: "bold" }} key={id}>
            {name} - {superpower} - {magnitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCartoon;
