import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  firstVal: "All Products",
  category: [],
  isLaoding: false,
  isError: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.isLoading = action.payload;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
