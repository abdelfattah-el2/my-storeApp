import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/products-Slice";
import categorySlice from "./Slices/category-slice";
import DetailsSlice from "./Slices/Details-slice";
import cartSlice from "./Slices/cart-Slice";
import Renderslice from "./Slices/cartrender";
import proposalsproduct from "./Slices/proposalsproduct";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    allcategory: categorySlice,
    detail: DetailsSlice,
    cart: cartSlice,
    ren: Renderslice,
    proposals: proposalsproduct,
  },
});
