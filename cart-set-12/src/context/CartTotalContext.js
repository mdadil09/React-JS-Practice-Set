import React, { createContext, useState } from "react";
import { items } from "../data/data";

export const CartTotalContext = createContext();

export function CartTotalProvider({ children }) {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  console.log(cart);

  const removeFromCart = (id) => {
    const product = cart.filter((item) => item.id !== id);
    setCart(product);
  };
  return (
    <CartTotalContext.Provider
      value={{ data, setData, cart, setCart, handleCartUpdate, removeFromCart }}
    >
      {children}
    </CartTotalContext.Provider>
  );
}
