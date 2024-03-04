import { RootState } from '@redux/reducers';
import { createSelector } from '@reduxjs/toolkit';

export const selectComments = (state: RootState) => state.comment.comments;

export const selectCommentsByProductId = (productId: number) =>
  createSelector(selectComments, (comments) =>
    comments.filter((comment) => comment.productId === productId)
  );
