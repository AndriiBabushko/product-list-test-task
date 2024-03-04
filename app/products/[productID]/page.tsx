'use server';

import { ProductCard } from './components';

interface ProductProps {
  params: {
    productID: number;
  };
}

export default async function Product({ params }: ProductProps) {
  return <ProductCard productID={params.productID} />;
}
