import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    incrementItemInCart: (state, action) => {},
    decrementItemInCart: (state, action) => {},
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItemInCart,
  decrementItemInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
