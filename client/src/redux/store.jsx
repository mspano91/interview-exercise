import { configureStore } from "@reduxjs/toolkit";
import fintechSlice from "./slice.jsx";

export const store = configureStore({
  reducer: {
    fintech: fintechSlice,
  },
});
