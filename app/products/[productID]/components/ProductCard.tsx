import { FC } from 'react';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <h1>ProductCard</h1>
    </div>
  );
};
