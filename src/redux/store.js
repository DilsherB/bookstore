import { configureStore } from "@reduxjs/toolkit";
import booksSliceReducer from "./books/booksSlice";
import categoriesSliceReducer from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    books: booksSliceReducer,
    category: categoriesSliceReducer,
  },
});
