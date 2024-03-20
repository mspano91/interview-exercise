import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTickers: [],
  Allsearch: [],
  selected: [],
};
export const fintechSlice = createSlice({
  name: "fintech",
  initialState,
  reducers: {
    setAllTickers: (state, action) => {
      state.allTickers = action.payload;
    },
    setReset: (state, action) => {
      state.Allsearch = [];
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllTickers, setReset, setSelected } = fintechSlice.actions;

export default fintechSlice.reducer;
