import { createSlice } from '@reduxjs/toolkit';

interface state {
  isLoading: false;
  value: number;
}

const initialState: state = {
  value: 0,
  isLoading: false,
};

export const testSlice = createSlice({
  name: 'testAsync',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = testSlice.actions;
export default testSlice.reducer;
