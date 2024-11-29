import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
