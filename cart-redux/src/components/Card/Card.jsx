import React from "react";
import { Link } from "react-router-dom";
import { getFirstLine, getPriceAfterDiscount } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  addToWishList,
  removeFromWishlist,
} from "../../redux/slice/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const Card = ({ products }) => {
  const dispatch = useDispatch();
  const {
    id,
    thumbnail,
    title,
    category,
    description,
    price,
    discountPercentage,
    rating,
  } = products;

  const wishLists = useSelector((state) => state.wishlist.wishlists);

  const isAvailable = wishLists.some((wishlistItem) => wishlistItem.id === id);

  const handleToggleWishlist = () => {
    if (isAvailable) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishList(products));
    }
  };

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <div className="product-card" key={id}>
        <div className="product-badge">{rating.toFixed(1)} ⭐</div>
        <div className="product-wishlist">
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart-icon ${isAvailable ? "clicked" : ""}`}
            onClick={handleToggleWishlist}
          />
        </div>

        <div className="product-tumb">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{category}</span>
          <h4>
            <Link to={`/productDetails/${id}`}>{title}</Link>
          </h4>
          <p style={{ fontSize: "8px", margin: 0 }}>
            {getFirstLine(description)}
          </p>
          <div className="product-bottom-details">
            <div className="product-price">
              <small>${price}</small>$
              {getPriceAfterDiscount(price, discountPercentage)}
            </div>
            <div className="product-links">
              <button onClick={() => handleAddCart(products)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
