import React, { useEffect, useState } from "react";
import { fakeFetch } from "../api/api";
import { styles } from "../styles/style";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container" style={styles.Container}>
      <h1>All Products</h1>
      {showProducts.map((product) => (
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
            <div className="buttons">
              <Link to={`/productDetails/${product.id}`} style={styles.Buttons}>
                View Details
              </Link>
              <Link to="/cart" style={styles.Buttons}>
                Add to Cart
              </Link>
              <Link to="/wishlist" style={styles.Buttons}>
                Add to Wishlist
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
