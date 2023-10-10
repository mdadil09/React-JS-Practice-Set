import "./App.css";
import { useContext } from "react";
import { CartTotalContext } from "./context/CartTotalContext";

function App() {
  const { data, cart, handleCartUpdate, removeFromCart } =
    useContext(CartTotalContext);
  const totalPrice = cart.reduce(
    (total, its) => (total += its.price * its.quantity),
    0
  );

  return (
    <div className="App">
      <div className="cart-total">
        <h1>Shopping Cart Summary</h1>
        <h1>Cart Total: ${totalPrice}</h1>
        {cart.map(({ id, name, price, quantity }) => {
          return (
            <div
              className="item"
              key={id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="pro" style={{ margin: 0 }}>
                <p>
                  {name} - ${price * quantity} (Quantity: {quantity})
                </p>
              </div>
              <div className="but" style={{ margin: "15px" }}>
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart">
        <h1>Available Items</h1>
        {data.map(({ id, name, price }) => {
          function handleCartClick() {
            handleCartUpdate({ id, name, price });
          }
          return (
            <div
              className="item"
              key={id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="pro" style={{ margin: 0 }}>
                <p>
                  {name} - ${price}
                </p>
              </div>
              <div className="but" style={{ margin: "15px" }}>
                <button onClick={handleCartClick}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
