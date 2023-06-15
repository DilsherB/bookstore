import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";
import { postBook } from "../redux/books/booksAPI";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAddBook = (e) => {
    e.preventDefault();
    const category = e.target[2].value;
    if (!title.trim() || !author.trim() || !category.trim()) {
      alert("Please fill all fields");
    } else {
      const newBook = {
        item_id: books.length + 1,
        title,
        category,
        author,
        Percentage: 0,
      };
      dispatch(addBook(newBook));
      dispatch(postBook(newBook));
    }
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
              onChange={titleHandler}
            />
          </div>

          <div className="form-group col-3 flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={author}
              onChange={authorHandler}
            />
          </div>

          <div className="form-group col-3 flex-row">
            <select
              name="category"
              id="category"
              className="form-select form-control"
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
