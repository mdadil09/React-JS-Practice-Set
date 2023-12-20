import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
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
