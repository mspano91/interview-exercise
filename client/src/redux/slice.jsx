import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTickers: [],
  Allsearch: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setAllTickers, setReset } = fintechSlice.actions;

export default fintechSlice.reducer;
