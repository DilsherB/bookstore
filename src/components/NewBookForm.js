import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

const NewBookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const author = e.target[1].value;
    const category = e.target[2].value;
    const itemId = books.length + 1;
    const Percentage = 0;
    const Chapter = "still to start";
    dispatch(
      addBook({
        title,
        author,
        category,
        itemId,
        Percentage,
        Chapter,
      })
    );
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
            />
          </div>
          <div className="form-group col-3 flex-row">
            <input type="text" className="form-control" placeholder="Author" />
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
