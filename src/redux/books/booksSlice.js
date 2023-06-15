import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: [
    {
      item_id: 1,
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
      Percentage: 64,
      Chapter: "Chapter 17",
    },
    {
      item_id: 2,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
      Percentage: 8,
      Chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      item_id: 3,
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
      Percentage: 0,
      Chapter: "Introduction",
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    remveBook: (state, action) => {
      return state.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, remveBook } = booksSlice.actions;
export default booksSlice.reducer;
