import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  cusDetails: [],
  orderInfo: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    addToCusDetails: (state, action) => {
      state.cusDetails.push(action.payload);
    },
    addToOrderInfo: (state, action) => {
      state.orderInfo.push(action.payload);
    },
  },
});

export const { addToOrder, addToCusDetails } = orderSlice.actions;

export default orderSlice.reducer;
