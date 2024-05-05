import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter_values",
  initialState: [],
  reducers: {
    addFilter(state, action) {
      let isFilterExist = false;
      const temp = state.map((currFilter) => {
        if (currFilter.type === action.payload.type) {
          currFilter.value = action.payload.value;
          isFilterExist = true;
        }
        return currFilter;
      });
      if (!isFilterExist) {
        state.push(action.payload);
      } else {
        state = temp;
      }
    },
    removeFilters(state) {
      state = [];
    },
  },
});

export const { addFilter, removeFilters } = filterSlice.actions;
export default filterSlice.reducer;
