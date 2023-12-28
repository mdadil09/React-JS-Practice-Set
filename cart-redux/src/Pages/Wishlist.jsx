import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Headers/Navbar";
import { getPriceAfterDiscount } from "../config/config";
import remove from "../assests/remove.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { removeFromWishlist } from "../redux/slice/wishListSlice";
import { addToCart } from "../redux/slice/cartSlice";

const Wishlist = () => {
  const wishLists = useSelector((state) => state.wishlist.wishlists);
  const dispatch = useDispatch();

  const handleRemoveWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <div className="wishList">
          <div className="wish-title">My Wishlist </div>
          {wishLists.map((item) => (
            <div className="wish-item" key={item.id}>
              <div className="wish-thumb">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="wish-title-text">
                <Link to="">
                  {" "}
                  <span>{item.title}</span>
                </Link>
                <span className="wish-badge">{item.rating.toFixed(1)} ⭐</span>
                <span
                  style={{
                    color: item.stock > 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {item.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="wish-price">
                ${getPriceAfterDiscount(item.price, item.discountPercentage)}
              </div>
              <div className="wish-buttons">
                <div className="add-button">
                  <button onClick={() => handleAddCart(item)}>
                    Add to Cart
                  </button>
                </div>
                <div className="remove-button">
                  <button onClick={() => handleRemoveWishlist(item.id)}>
                    <img src={remove} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
