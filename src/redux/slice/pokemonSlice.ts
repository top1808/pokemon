import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import pokemonApi from '../api/pokemonApi';
import { PokemonDetails } from '../models';

interface state {
  isLoading: boolean;
  listPokemon: Array<PokemonDetails>;
  data: object;
}

const initialState: state = {
  data: {},
  listPokemon: [],
  isLoading: false,
};

export const fetchListPokemon = createAsyncThunk(
  'pokemonSlice/fetchListPokemon',
  async (params: object) => {
    const res = await pokemonApi.getPokemon(params);
    return res.data;
  }
);

export const getPokemonDetails = createAsyncThunk(
  'pokemonSlice/getPokemonDetails',
  async (name: string) => {
    const res = await pokemonApi.getPokemonDetails(name);
    return res.data;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListPokemon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchListPokemon.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPokemonDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.listPokemon.push(action.payload);
      state.isLoading = false;
    });
  },
});

// export const {} = pokemonSlice.actions;
export default pokemonSlice.reducer;
