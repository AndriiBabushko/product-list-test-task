import { z } from 'zod';

export enum COMMENT_IDS {
  COMMENT_ID = 'id',
  COMMENT_PRODUCT_ID = 'productID',
  COMMENT_DESCRIPTION = 'description',
  COMMENT_DATE = 'date',
}

export const getCommentSchema = () =>
  z.object({
    [COMMENT_IDS.COMMENT_ID]: z.number().int(),
    [COMMENT_IDS.COMMENT_PRODUCT_ID]: z
      .number()
      .refine((value) => value !== undefined && value !== null, {
        message: 'Product ID is required',
      }),
    [COMMENT_IDS.COMMENT_DESCRIPTION]: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'Comment description is required',
      }),
    [COMMENT_IDS.COMMENT_DATE]: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'Comment date is required',
      }),
  });

export type TCommentSchema = z.infer<ReturnType<typeof getCommentSchema>>;
