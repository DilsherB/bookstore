import { createSlice } from "@reduxjs/toolkit";
import { getBooks, postBook, removeBook } from "./booksAPI";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksArray: [],
    error: { status: "pending", message: "Pending" },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const result = Object.keys(action.payload).map((key) => ({
          item_id: key,
          title: action.payload[key][0].title,
          category: action.payload[key][0].category,
          author: action.payload[key][0].author,
          percentage: 0,
          chapter: "Still to start",
        }));
        state.booksArray = result;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = "rejected";
        state.message = `Failed to fetch books ${action.payload.data.response.message}`;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.booksArray.push(action.payload);
      })
      .addCase(postBook.rejected, (state, action) => {
        state.status = "rejected";
        state.message = `Failed to add a book ${action.payload.data.response.message}`;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.booksArray = state.booksArray.filter(
          (book) => book.item_id !== action.payload.item_id
        );
      });
  },
});

export default booksSlice.reducer;
