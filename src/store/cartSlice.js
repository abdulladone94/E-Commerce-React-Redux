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
    changeQuantity(state, action) {
      const { productId, itemQuentity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (itemQuentity > 0) {
        state.items[indexProductId].itemQuentity = itemQuentity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
