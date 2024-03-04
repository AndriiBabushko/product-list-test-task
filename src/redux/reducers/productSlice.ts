import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    editProduct(
      state,
      action: PayloadAction<{ productId: number; updatedProduct: IProduct }>
    ) {
      const { productId, updatedProduct } = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === productId
      );

      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      const productIdToDelete = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToDelete
      );
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
