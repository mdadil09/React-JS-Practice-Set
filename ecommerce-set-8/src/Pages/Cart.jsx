import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { styles } from "../styles/style";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="container" style={styles.Container}>
      {cart.map((product) => {
        return (
          <div
            className="product"
            key={product.id} /* style={styles.Product} */
          >
            <div className="card" style={styles.Card}>
              <p>
                <b>Name:</b> {product.name}
              </p>
              <p>
                <b>Brand:</b> {product.brand}
              </p>
              <p>
                <b>Price:</b> {product.price}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                style={styles.Buttons}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <h3>
        Total Price: {cart.reduce((total, item) => (total += item.price), 0)}
      </h3>
    </div>
  );
};

export default Cart;
