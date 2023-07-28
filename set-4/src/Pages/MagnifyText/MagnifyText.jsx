import React, { useState } from "react";

const MagnifyText = () => {
  const [fontSize, setFontSize] = useState(18);
  return (
    <div className="container" style={{ padding: "60px" }}>
      <h1 style={{ fontSize: "60px" }}>Magnify Text</h1>
      <p style={{ fontSize: `${fontSize}px`, fontWeight: "bold" }}>
        Welcome Home!
      </p>
      <button
        style={{
          marginRight: "10px",
          padding: "10px",
          fontSize: "40px",
          width: "125px",
        }}
        onClick={() => setFontSize(fontSize + 1)}
      >
        +
      </button>
      <button
        style={{ padding: "10px", fontSize: "40px", width: "125px" }}
        onClick={() => setFontSize(fontSize - 1)}
      >
        -
      </button>
    </div>
  );
};

export default MagnifyText;
