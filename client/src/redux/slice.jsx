import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTickers: [],
  Allsearch: [],
  selected: [],
  added: [],
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
    SetAddedArray: (state, action) => {
      state.added = [...state.added, ...action.payload];
    },
    SetDeletedStock: (state, action) => {
      state.added = state.added.filter((item) => item.name !== action.payload);
    },
  },
});

export const {
  setAllTickers,
  setReset,
  setSelected,
  setSelectedName,
  SetAddedArray,
  SetDeletedStock,
} = fintechSlice.actions;

export default fintechSlice.reducer;
