import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./slice/cartSlice";
import productReducer from "./slice/productSlice";
import categoryReducer from "./slice/categorySlice";
import wishListReducer from "./slice/wishListSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer);
const persistedWishListReducer = persistReducer(persistConfig, wishListReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    product: persistedProductReducer,
    category: persistedCategoryReducer,
    wishlist: persistedWishListReducer,
  },
});

export const persistor = persistStore(store);
