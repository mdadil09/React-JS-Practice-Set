import React, { useReducer } from "react";
import { createContext } from "react";
import { data } from "../data/data";

export const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_METHOD":
      return { ...state, sortMethod: action.payload };
    case "OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    default:
      return { ...state };
  }
};

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, {
    sortMethod: "",
    includeOutOfStock: false,
  });

  const applyFilters = (data) => {
    let filterData = [...data];

    if (state.sortMethod) {
      state.sortMethod === "asc"
        ? filterData.sort((a, b) => a.price - b.price)
        : filterData.sort((a, b) => b.price - a.price);
    }

    if (!state.includeOutOfStock) {
      filterData = filterData.filter(({ inStock }) => inStock);
    }

    return filterData;
  };

  const filteredItem = applyFilters(data);

  return (
    <ProductContext.Provider value={{ filteredItem, state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
