import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { styles } from "../styles/style";

const Wishlist = () => {
  const { wishList, handleCartUpdate, removeFromWishList } =
    useContext(CartContext);

  return (
    <div className="container" style={styles.Container}>
      <h3>Items in WishList: {wishList.length}</h3>
      {wishList.map((product) => (
        <div className="product" key={product.id} /* style={styles.Product} */>
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
            <p>
              <b>Description:</b> {product.description}
            </p>
            <button
              onClick={() => handleCartUpdate(product)}
              style={styles.Buttons}
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeFromWishList(product.id)}
              style={styles.Buttons}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
