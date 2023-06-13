import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});
