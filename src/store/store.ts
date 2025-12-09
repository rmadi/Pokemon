import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { PokemonApi } from './features/pokemonApi';
import { sensitiveStorage } from './sensitiveStorage';

// Combine reducers
const rootReducer = combineReducers({
  [PokemonApi.reducerPath]: PokemonApi.reducer,
});

// Secure persist config
const persistConfig = {
  key: 'root',
  storage: sensitiveStorage,     
  whitelist: [],                
};

// Wrap with persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 200 },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: [PokemonApi.reducerPath],
      },
    }).concat(PokemonApi.middleware),

  devTools: __DEV__ && { trace: false },
});

// Listener setup
setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
