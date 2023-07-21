import { configureStore, createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    name: '',
    score: 0,
    array: ['a', 'b', 'c', 'd'],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addToScore: (state, action) => {
      if (action.payload === '') return;
      const n = Number(action.payload);
      if (Number.isNaN(n)) return;
      console.log(n);
      state.score = state.score + n;
    },
    removeFromScore: (state, action) => {
      if (action.payload === '') return;
      const n = Number(action.payload);
      if (Number.isNaN(n)) return;
      console.log(n);
      state.score = state.score - n;
    },
    pushInArray: (state, action) => {
      state.array = [...state.array, action.payload];
    },
    removeFromArray: (state, action) => {
      state.array = state.array.filter((el, index) => index !== action.payload);
    },
  },
});
const store = configureStore({ reducer: { global: globalSlice.reducer } });

export default store;
export const { removeFromArray } = globalSlice.actions;
export const actions = {
  setName: globalSlice.actions.setName,
  addToScore: globalSlice.actions.addToScore,
  removeFromScore: globalSlice.actions.removeFromScore,
  pushInArray: globalSlice.actions.pushInArray,
};
