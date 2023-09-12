import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/api";

export const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);

  const getFoodData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/menu");
      setFood(res.data.menu);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoodData();
  }, []);

  const handleCartUpdate = (product) => {
    setCart((cart) => [...cart, product]);
  };

  return (
    <FoodContext.Provider value={{ food, setFood, cart, handleCartUpdate }}>
      {children}
    </FoodContext.Provider>
  );
}
