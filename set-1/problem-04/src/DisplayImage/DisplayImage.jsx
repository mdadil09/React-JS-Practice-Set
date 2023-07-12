import React from "react";
import { imageLink } from "../App";

const DisplayImage = ({ captions }) => {
  return (
    <div className="container">
      <div className="display">
        <img src={imageLink} alt={captions} />
        <p>{captions}</p>
      </div>
    </div>
  );
};

export default DisplayImage;
