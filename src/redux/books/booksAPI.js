import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import APP_ID from "../../globals";

const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Rdouf9h4N0TqW5QLCvvc/books`;

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk("books/postBook", async (book) => {
  try {
    await axios.post(API_URL, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
      percentage: 0,
      chapter: "Still to start",
    });
    return book;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    try {
      const result = await axios.delete(`${API_URL}/${bookId}`);
      return { item_id: bookId, message: result.data };
    } catch (error) {
      return error.message;
    }
  }
);
