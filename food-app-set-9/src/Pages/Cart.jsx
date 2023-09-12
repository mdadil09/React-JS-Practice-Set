import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Cart = () => {
  const { cart } = useContext(FoodContext);
  return (
    <>
      <h1 style={{ fontSize: "40px", marginLeft: "220px", marginTop: "100px" }}>
        Cart
      </h1>
      <div className="cart-container">
        {cart.map((item) => {
          return (
            <div className="card">
              <img
                src={item.image}
                alt="food"
                style={{ width: "600px", height: "600px" }}
              />
              <h1>{item.name}</h1>
              <p className="price">${item.price}</p>
              <p className="desc">{item.description}</p>
              <p className="desc">{item.delivery_time} min</p>
              <p style={{ margin: 0 }}>
                <button style={{ margin: 0 }}>Remove from Cart</button>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
