import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "book",
  initialState: [
    {
      item_id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
      Percentage: 64,
      Complete: "Complete",
      CurrentChapter: "CURRENT CHAPTER",
      Chapter: "Chapter 17",
      UpdateProgress: "UPDATE PROGRESS",
    },
    {
      item_id: "item2",
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      category: "Fiction",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
      Percentage: 8,
      Complete: "Complete",
      CurrentChapter: "CURRENT CHAPTER",
      Chapter: 'Chapter 3: "A Lesson Learned"',
      UpdateProgress: "UPDATE PROGRESS",
    },
    {
      item_id: "item3",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Nonfiction",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
      Percentage: 0,
      Complete: "Complete",
      CurrentChapter: "CURRENT CHAPTER",
      Chapter: "Introduction",
      UpdateProgress: "UPDATE PROGRESS",
    },
  ],
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
