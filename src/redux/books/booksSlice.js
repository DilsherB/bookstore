import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "book",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    remveBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, remveBook } = booksSlice.actions;
export default booksSlice.reducer;
