import { z } from 'zod';

export enum PRODUCT_IDS {
  PRODUCT_ID = 'id',
  PRODUCT_IMAGE_ID = 'productImage',
  PRODUCT_NAME_ID = 'productName',
  PRODUCT_COUNT_ID = 'productCount',
  PRODUCT_SIZE_ID = 'productSize',
  PRODUCT_WEIGHT_ID = 'productWeight',
}

export const getProductSchema = () =>
  z.object({
    [PRODUCT_IDS.PRODUCT_ID]: z
      .number()
      .refine((value) => Boolean(value), { message: 'Product ID is required' }),
    [PRODUCT_IDS.PRODUCT_IMAGE_ID]: z
      .string()
      .refine((value) => Boolean(value), {
        message: 'Product image is required',
      }),
    [PRODUCT_IDS.PRODUCT_NAME_ID]: z
      .string()
      .refine((value) => Boolean(value), {
        message: 'Product name is required',
      }),
    [PRODUCT_IDS.PRODUCT_COUNT_ID]: z
      .number()
      .refine((value) => Boolean(value), {
        message: 'Product count is required',
      }),
    [PRODUCT_IDS.PRODUCT_SIZE_ID]: z.object({
      width: z.number(),
      height: z.number(),
    }),
    [PRODUCT_IDS.PRODUCT_WEIGHT_ID]: z
      .string()
      .refine((value) => Boolean(value), {
        message: 'Product weight is required',
      }),
  });

export type TProductSchema = z.infer<ReturnType<typeof getProductSchema>>;
