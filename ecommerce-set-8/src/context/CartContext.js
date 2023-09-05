import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/products");
        setProductsData(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, []);

  const handleCartUpdate = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const handleWishList = (wish) => {
    setWishList((wishList) => [...wishList, wish]);
  };

  const removeFromCart = (id) => {
    const product = cart.filter((item) => item.id !== id);
    setCart(product);
  };

  const removeFromWishList = (id) => {
    const product = wishList.filter((item) => item.id !== id);
    setWishList(product);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartUpdate,
        removeFromCart,
        productsData,
        wishList,
        handleWishList,
        removeFromWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
