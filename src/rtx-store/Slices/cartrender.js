import { createSlice } from "@reduxjs/toolkit";

export let Renderslice = createSlice({
  initialState: 0,
  name: "renderslice",
  reducers: {
    rendernav: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { rendernav } = Renderslice.actions;
export default Renderslice.reducer;
