import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let id;

export let detailspage = createAsyncThunk(
  "detailsSlice/detailspage",
  async () => {
    const res = await fetch(`https://backend-h9bl.onrender.com/proudexct/${id}`);
    const data = await res.json();
    return data;
  }
);

export const detailsSlice = createSlice({
  initialState: [],
  name: "detailsSlice",
  reducers: {
    detailsID: (state, action) => {
      return (id = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(detailspage.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { refrac, detailsID } = detailsSlice.actions;
export default detailsSlice.reducer;
