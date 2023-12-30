import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import SingleProductCard from "../components/Card/SingleProductCard";
import { useParams } from "react-router";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer/Footer";
import {
  addToWishList,
  removeFromWishlist,
} from "../redux/slice/wishListSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);

  const singleProduct = products.find((item) => item.id === parseInt(id));

  const wishLists = useSelector((state) => state.wishlist.wishlists);

  const isAvailable = wishLists.some(
    (wishlistItem) => wishlistItem.id === parseInt(id)
  );

  const handleToggleWishlist = () => {
    if (isAvailable) {
      dispatch(removeFromWishlist(parseInt(id)));
    } else {
      dispatch(addToWishList(singleProduct));
    }
  };

  const handleAddCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <>
      <Navbar />
      <SingleProductCard
        isAvailable={isAvailable}
        singleProduct={singleProduct}
        handleAddCart={handleAddCart}
        handleToggleWishlist={handleToggleWishlist}
      />
      <Footer />
    </>
  );
};

export default SingleProducts;
