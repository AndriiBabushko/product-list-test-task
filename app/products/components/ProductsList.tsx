'use client';

import { FC } from 'react';

interface ProductsListProps {
  products: IProduct[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <div>
      <h1>ProductsList</h1>
    </div>
  );
};
