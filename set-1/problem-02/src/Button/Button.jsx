import React from "react";

const Button = ({ backgroundColor, color, borderRadius, padding }) => {
  return (
    <div className="button">
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: borderRadius,
          padding: padding,
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Button;
