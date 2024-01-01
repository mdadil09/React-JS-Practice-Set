import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
