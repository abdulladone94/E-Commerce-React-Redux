import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, itemQuentity } = action.payload;
      const findIndex = state.items.findIndex(
        (index) => index.productId === productId
      );
      console.log(findIndex);
      if (findIndex >= 0) {
        state.items[findIndex].itemQuentity += itemQuentity;
      } else {
        state.items.push({ productId, itemQuentity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
