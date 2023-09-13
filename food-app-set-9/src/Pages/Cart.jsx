import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Cart = () => {
  const { cart } = useContext(FoodContext);
  const totalPrice = cart.reduce((total, item) => (total += item.price), 0);
  const tax = totalPrice * (5 / 100);
  const shipping = cart.length > 0 ? 15 : 0;

  const grandTotal = totalPrice + tax + shipping;

  return (
    <div className="cart">
      <h1 style={{ fontSize: "40px", marginTop: "100px" }}>Cart</h1>
      <hr style={{ marginRight: "550px" }} />
      <div className="cart-container">
        {cart.map((item) => {
          return (
            <div className="cart-main">
              <img
                src={item.image}
                alt="food"
                style={{
                  marginTop: "25px",
                  marginLeft: "25px",
                  width: "200px",
                  height: "150px",
                }}
              />
              <div className="name">
                <h1 style={{ margin: 0 }}>{item.name}</h1>
                <p style={{ margin: 0 }}>{item.description}</p>
              </div>
              <div className="time">
                <p>{item.delivery_time} min</p>
              </div>
              <div className="price">
                <p>${item.price}</p>
              </div>
              <div className="cart-button">
                <button>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        <div className="totalPrice">
          <p style={{ width: "70%" }}>Total Price:</p>
          <p>${totalPrice}</p>
        </div>
        <div className="tax">
          <p style={{ width: "70%" }}>Tax:</p>
          <p>${parseInt(tax)}</p>
        </div>
        <div className="shipping">
          <p style={{ width: "70%" }}>Shipping:</p>
          <p> ${shipping}</p>
        </div>
        <hr />
        <div className="grand">
          <p style={{ width: "70%" }}>Grand Total:</p>
          <p>${parseInt(grandTotal)}</p>
        </div>
        <div className="cart-total-button">
          <p style={{ width: "50%" }}></p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
