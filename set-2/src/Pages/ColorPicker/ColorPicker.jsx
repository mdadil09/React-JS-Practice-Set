import React, { useState } from "react";

const ColorPicker = ({ red, blue, green }) => {
  const [showColor, setShowColor] = useState(null);

  const handleColorClick = (code) => {
    if (setShowColor(code) !== code) {
      setShowColor(code);
    }
  };

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Color Picker</h1>
      <button
        style={{
          marginRight: "10px",
          fontSize: "40px",
          borderRadius: "10px",
          backgroundColor: "red",
          color: "white",
          width: "200px",
        }}
        onClick={() => handleColorClick(red)}
      >
        Red
      </button>
      <button
        style={{
          marginRight: "10px",
          fontSize: "40px",
          borderRadius: "10px",
          backgroundColor: "blue",
          color: "white",
          width: "200px",
        }}
        onClick={() => handleColorClick(blue)}
      >
        Blue
      </button>
      <button
        style={{
          marginRight: "10px",
          fontSize: "40px",
          borderRadius: "10px",
          backgroundColor: "green",
          color: "white",
          width: "200px",
        }}
        onClick={() => handleColorClick(green)}
      >
        Green
      </button>
      {showColor ? <p>Hex code: {showColor}</p> : null}
    </div>
  );
};

export default ColorPicker;
