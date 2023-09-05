import React, { useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";
import { styles } from "../styles/style";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const { productsData, handleCartUpdate } = useContext(CartContext);

  const product = productsData.find((item) => item.id === parseInt(id, 36));
  return (
    <div className="container" style={styles.Container}>
      {product && (
        <div className="product" key={id} /* style={styles.Product} */>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
