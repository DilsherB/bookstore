import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { postBook, getBooks } from "../redux/books/booksAPI";

const NewBookForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault();
    const category = e.target[2].value;
    if (!title.trim() || !author.trim() || !category.trim()) {
      return alert("Please fill all fields");
    }
    const newBook = {
      item_id: uuid(),
      title,
      category,
      author,
    };
    dispatch(postBook(newBook));
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <p className="fs-4 text-secondary">ADD NEW BOOK</p>
      <form onSubmit={handleAddBook}>
        <div className="d-flex justify-content-between mediaQueryNewBookForm pb-5">
          <div className="form-group col-3 flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group col-3 flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="form-group col-3 flex-row">
            <select
              name="category"
              id="category"
              className="form-select form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <optgroup label="Category">
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Economy">Economy</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary form-control"
              style={{ minWidth: "max-content" }}
            >
              ADD BOOK
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewBookForm;
