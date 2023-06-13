import { configureStore } from "@reduxjs/toolkit";
import booksSliceReducer from "./books/booksSlice";
import categoriesSliceReducer from "./categories/categoriesSlice";

const store = configureStore({
  reducer: {
    books: booksSliceReducer,
    category: categoriesSliceReducer,
  },
});

export default store;
