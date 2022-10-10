import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { testSlice, pokemonSlice } from '../slice';

export const store = configureStore({
  reducer: {
    counter: testSlice,
    pokemons: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
