import React from "react";

const Cartoon = ({ cartoons }) => {
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Cartoons</h1>
      <ul style={{ listStyle: "none" }}>
        {cartoons.map(({ id, name, superpower, magnitude }) =>
          magnitude > 5 ? (
            <li key={id} style={{ padding: "10px" }}>
              Name: {name} Superpower: {superpower} Magnitude:{magnitude}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Cartoon;
