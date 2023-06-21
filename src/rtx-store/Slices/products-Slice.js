import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let fetchsre = "";

let Url = `https://backend-h9bl.onrender.com/proudexct`;
export const fetchget = createAsyncThunk("ProductsApi/fetchget", async () => {
  const res = await fetch(`${Url}${fetchsre}`);
  const data = await res.json();
  return data;
});
export const ProductsApi = createSlice({
  initialState: [],
  name: "ProductsApi",
  reducers: {
    fliter: (state, action) => {
      return (fetchsre = `?category=${action.payload}`);
    },
    all: (state, action) => {
      return (fetchsre = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchget.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { fliter, all } = ProductsApi.actions;
export default ProductsApi.reducer;
