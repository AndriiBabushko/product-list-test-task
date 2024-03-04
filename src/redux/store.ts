import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@redux/reducers';

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
