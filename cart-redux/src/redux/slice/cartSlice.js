import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.carts.find(
        (item) => item.product.id === newItemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.carts.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.product.id === action.payload
      );
      if (index !== -1) {
        state.carts.splice(index, 1);
      }
    },
    incrementItemInCart: (state, action) => {
      const inc = state.carts.find(
        (item) => item.product.id === action.payload
      );
      if (inc) {
        inc.quantity += 1;
      }
    },
    decrementItemInCart: (state, action) => {
      state.carts = state.carts
        .map((item) => {
          if (item.product.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItemInCart,
  decrementItemInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
