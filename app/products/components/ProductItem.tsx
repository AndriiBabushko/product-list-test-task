import { FC } from 'react';

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h1>ProductItem</h1>
    </div>
  );
};
