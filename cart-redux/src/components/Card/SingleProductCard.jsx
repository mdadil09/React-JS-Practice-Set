import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateStarRating, getPriceAfterDiscount } from "../../config/config";

const SingleProductCard = ({
  singleProduct,
  handleAddCart,
  handleToggleWishlist,
  isAvailable,
}) => {
  const [mainImage, setMainImage] = useState(singleProduct.thumbnail);

  const sliderImageList = singleProduct.images || [];

  const handleImageClick = (index) => {
    setMainImage(sliderImageList[index]);
  };

  return (
    <>
      <div className="single-container">
        {singleProduct && (
          <div className="single-product">
            <div className="single-row">
              <div className="single-col-6">
                <div className="single-product-image">
                  <div className="single-product-image-main">
                    <img src={mainImage} alt="" id="product-main-image" />
                  </div>
                  <div className="product-image-slider">
                    {sliderImageList.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`${index}`}
                        className="image-list"
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="single-col-6">
                <div className="breadcrumb">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span>
                    <Link to="/products">Product</Link>
                  </span>
                  <span className="active">{singleProduct.category}</span>
                </div>
                <div className="single-product">
                  <div className="single-product-title">
                    <h2>{singleProduct.title}</h2>
                  </div>
                  <div className="single-product-rating">
                    {generateStarRating(singleProduct.rating)}
                    <span className="single-review">(47 Review)</span>
                  </div>
                  <div className="single-product-price">
                    <span className="offer-price">
                      $
                      {getPriceAfterDiscount(
                        singleProduct.price,
                        singleProduct.discountPercentage
                      )}
                    </span>
                    <span className="sale-price">${singleProduct.price}</span>
                  </div>
                  <div className="single-product-details">
                    <h3>Description</h3>
                    <p>{singleProduct.description.split("\n")}</p>
                  </div>
                  <div className="single-product-color">
                    <h4>Color</h4>
                    <div className="color-layout">
                      <input
                        type="radio"
                        name="color"
                        defaultValue="black"
                        className="color-input"
                      />
                      <label htmlFor="black" className="black" />
                      <input
                        type="radio"
                        name="color"
                        defaultValue="red"
                        className="color-input"
                      />
                      <label htmlFor="red" className="red" />
                      <input
                        type="radio"
                        name="color"
                        defaultValue="blue"
                        className="color-input"
                      />
                      <label htmlFor="blue" className="blue" />
                    </div>
                  </div>
                  <span className="divider" />
                  <div className="single-product-btn-group">
                    <div className="button buy-now">
                      <i className="bx bxs-zap" /> Buy Now
                    </div>
                    <div
                      className="button add-cart"
                      onClick={() => handleAddCart(singleProduct)}
                    >
                      <i className="bx bxs-cart" /> Add to Cart
                    </div>
                    <div
                      className={`button heart ${
                        isAvailable ? "heart-clicked" : ""
                      }`}
                      onClick={handleToggleWishlist}
                    >
                      <i className="bx bxs-heart" /> Add to Wishlist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProductCard;
