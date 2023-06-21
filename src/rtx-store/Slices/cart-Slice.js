import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let fetahpost = createAsyncThunk("cartSlicr/fetahpost", async () => {
  const res = await fetch("https://backend-h9bl.onrender.com/cart");
  const date = await res.json();
  return date;
});

let cartSlicr = createSlice({
  initialState: [],
  name: "cartSlicr",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetahpost.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = cartSlicr.actions;
export default cartSlicr.reducer;
