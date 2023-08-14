import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateCart: (state, action) => {
      state.products = action.payload;
      state.quantity = action.payload.reduce(
        (totalQuantity, product) => totalQuantity + product.quantity,
        0
      );
      state.total = action.payload.reduce(
        (totalPrice, product) => totalPrice + product.price * product.quantity,
        0
      );
    },
  },
});

export const { addProduct, clearCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
