'use server';

interface ProductProps {
  params: {
    productID: number;
  };
}

export default async function Product({ params }: ProductProps) {
  return (
    <div>
      <h1>Product {params.productID}</h1>
    </div>
  );
}
