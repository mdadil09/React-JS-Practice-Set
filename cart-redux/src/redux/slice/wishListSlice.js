import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlists: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishlists.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      const index = state.wishlists.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.wishlists.splice(index, 1);
      }
    },
  },
});

export const { addToWishList, removeFromWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
