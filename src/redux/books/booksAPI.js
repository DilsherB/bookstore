import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import APP_ID from "../../globals";

const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const postBook = createAsyncThunk("books/postBook", async (book) => {
  await axios.post(API_URL, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId) => {
    await axios.delete(`${API_URL}/${bookId}`);
    return bookId;
  }
);

export const updateBook = createAsyncThunk("books/updateBook", async (book) => {
  await axios.put(`${API_URL}/${book.item_id}`, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});
