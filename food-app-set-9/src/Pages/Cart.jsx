import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(FoodContext);
  const totalPrice = cart.reduce((total, item) => (total += item.price), 0);
  const tax = totalPrice * (5 / 100);
  const shipping = cart.length > 0 ? 15 : 0;

  const grandTotal = totalPrice + tax + shipping;

  return (
    <>
      <h1 style={{ fontSize: "40px", marginTop: "100px", marginLeft: "100px" }}>
        Cart
      </h1>
      <hr style={{ marginRight: "20px", marginLeft: "100px" }} />

      <div className="cart">
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
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 ? (
          <div className="cart-total-card">
            <div className="cart-total">
              <h3
                style={{
                  fontSize: "32px",
                  marginLeft: "10px",
                  color: "grey",
                  fontWeight: "400",
                }}
              >
                Price Details
              </h3>
              <hr style={{ marginRight: "10px", marginLeft: "10px" }} />
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
              <hr style={{ marginRight: "10px", marginLeft: "10px" }} />
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
        ) : null}
      </div>
    </>
  );
};

export default Cart;
