import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let category;
let url = `https://backend-h9bl.onrender.com/proudexct`;
export let getfetchproduct = createAsyncThunk(
  "proposalsProduct/getfetchproduct",
  async () => {
    const res = await fetch(`${url}${category}`);
    const data = await res.json();
    return data;
  }
);
export let proposalsProduct = createSlice({
  initialState: [],
  name: "proposalsProduct",
  reducers: {
    getcategory: (state, action) => {
      return (category = `?category=${action.payload}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getfetchproduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updat, getcategory } = proposalsProduct.actions;
export default proposalsProduct.reducer;
