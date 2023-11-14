import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      products: [],
      total: 0,
      quantity: 0, // new field
    },
    reducers: {
      addProduct: (state, action) => {
        const { id, name, price, quantity } = action.payload;
        const existingProductIndex = state.products.findIndex((product) => product.id === id);
        if (existingProductIndex !== -1) {
          state.products[existingProductIndex].quantity += quantity;
        } else {
          state.products.push({ id, name, price, quantity });
        }
        state.total += price * quantity;
        state.quantity += quantity; // increment quantity
      },
      updateProductQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const product = state.products.find((product) => product.id === id);
        if (product) {
          state.total += (quantity - product.quantity) * product.price;
          product.quantity = quantity;
          state.quantity += quantity - product.quantity; // update quantity
        }
      },
      removeProduct: (state, action) => {
        const { productId } = action.payload;
        const product = state.products.find((product) => product.id === productId);
        if (product) {
          state.products = state.products.filter((product) => product.id !== productId);
          state.total -= product.price * product.quantity;
          if (state.quantity >= 0) {
          state.quantity -= product.quantity; // decrement quantity
          }
        }
      },
    },
  });
  
export const { addProduct, updateProductQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
