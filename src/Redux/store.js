import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/FilterSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});
