import React from "react";

const DisplayImage = ({ image, height, width }) => {
  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Display Image</h1>
      <img src={image} style={{ height: height, width: width }} alt="" />
    </div>
  );
};

export default DisplayImage;
