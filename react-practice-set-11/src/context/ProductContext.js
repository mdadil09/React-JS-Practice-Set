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
    case "FAST_DELIVERY":
      return { ...state, includefastDelivery: !state.includefastDelivery };
    case "INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    default:
      return { ...state };
  }
};

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, {
    inputValue: "",
    searchValue: "",
    includeOutOfStock: false,
    includefastDelivery: false,
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

    if (state.includefastDelivery) {
      filterData = filterData.filter(({ fastDelivery }) => fastDelivery);
    }

    return filterData;
  };

  const searcFilter = (data) => {
    let newData = [...data];

    if (state.searchValue.trim().length > 0) {
      return newData.filter(({ name }) =>
        name
          .trim()
          .toLowerCase()
          .includes(state.searchValue.trim().toLowerCase())
      );
    } else {
      return newData;
    }
  };

  const searchItem = searcFilter(data);

  const filteredItem = applyFilters(data);

  return (
    <ProductContext.Provider
      value={{ filteredItem, searchItem, state, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
}
