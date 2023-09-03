import React from "react";
import { useParams } from "react-router";

const ProductDetails = (props) => {
  const { id } = useParams();
  return (
    <div className="container">
      <p>{id}</p>
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Brand:</b> {props.brand}
      </p>
      <p>
        <b>Price:</b> {props.price}
      </p>
    </div>
  );
};

export default ProductDetails;
