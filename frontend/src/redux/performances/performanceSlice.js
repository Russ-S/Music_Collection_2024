import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  performances: [],
  checked: [],
  radio: {},
  categoryCheckboxes: {},
  checkedCategories: [],
};
const performanceSlice = createSlice({
  name: "performances",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setPerformances: (state, action) => {
      state.performances = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setCategories,
  setPerformances,
  setChecked,
  setRadio,
  setSelectedCategory,
} = performanceSlice.actions;

export default performanceSlice.reducer;
