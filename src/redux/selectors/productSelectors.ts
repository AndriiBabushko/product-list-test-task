import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/reducers';

export const selectProducts = (state: RootState) => state.product.products;

export const sortedProductsSelector = createSelector(
  [selectProducts],
  (products) => {
    const sortedProductsByName = products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    return sortedProductsByName.sort((a, b) => {
      if (a.count === b.count) {
        return 0;
      }

      return a.count > b.count ? 1 : -1;
    });
  }
);

export const selectProductById = (productId: number) =>
  createSelector(selectProducts, (products) =>
    products.find((product) => product.id == productId)
  );
