import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilterName = (state) => state.filters.name;

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
