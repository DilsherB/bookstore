import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === "Under Construction"
        ? "Under Construction"
        : state.categories;
    },
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
