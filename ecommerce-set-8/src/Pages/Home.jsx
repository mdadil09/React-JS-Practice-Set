import React, { useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/api";
import { styles } from "../styles/style";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const [showProducts, setShowProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await fakeFetch("https://example.com/api/products");
      setShowProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const { handleCartUpdate, handleWishList } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container" style={styles.Container}>
      <h1>All Products</h1>
      {showProducts.map((product) => {
        function handleProductClick() {
          handleCartUpdate(product);
        }

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
              <div className="Links">
                <Link to={`/productDetails/${product.id}`} style={styles.Links}>
                  View Details
                </Link>
              </div>
              <div className="buttons">
                <button
                  onClick={() => handleWishList(product)}
                  style={styles.Buttons}
                >
                  Add to Wishlist
                </button>
                <button onClick={handleProductClick} style={styles.Buttons}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
