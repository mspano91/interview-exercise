import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTickers: [],
  Allsearch: [],
  selected: [],
  selectedName: "",
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
    setSelectedName: (state, action) => {
      state.selectedName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllTickers, setReset, setSelected, setSelectedName } =
  fintechSlice.actions;

export default fintechSlice.reducer;
