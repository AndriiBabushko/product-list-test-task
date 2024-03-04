import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@redux/reducers';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    version: 1,
  },
  rootReducer
);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export const { store, persistor } = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
