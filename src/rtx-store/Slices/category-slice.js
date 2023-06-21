import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const categoryfetch = createAsyncThunk(
  "categorySlice/categoryfetch",
  async () => {
    const res = await fetch(`https://backend-h9bl.onrender.com/categories`);
    const data = await res.json();
    return data;
  }
);

export const categorySlice = createSlice({
  initialState: [],
  name: "categorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryfetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
