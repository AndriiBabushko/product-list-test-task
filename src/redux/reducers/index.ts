import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import commentReducer from './commentSlice';

const rootReducer = combineReducers({
  product: productReducer,
  comment: commentReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
