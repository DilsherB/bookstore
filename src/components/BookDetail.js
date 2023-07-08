import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../redux/books/booksAPI";
import CompletionCircle from "./CompletionCircle";

const BookDetail = () => {
  const books = useSelector((state) => state.books.booksArray);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };
  const bookCompPer = Math.floor(Math.random() * 101);
  const totalChapters = Math.floor(Math.random() * 31);
  return (
    <div>
      {books.map((book) => {
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={book.item_id}
            className="d-flex bg-white p-3 my-3 border rounded justify-content-between mediaQueryMainPage"
          >
            <div className="my-3 w-50">
              <p className="fw-bold text-secondary lh-1">{book.category}</p>
              <p className="fw-bold fs-4 lh-1">{book.title}</p>
              <p className="text-primary lh-1 fw-light">{book.author}</p>
              <div className="d-flex gap-3 pt-3">
                <button
                  type="button"
                  className="btn btn-none text-primary fw-light"
                >
                  Comments
                </button>
                <div className="vr" />
                <button
                  type="button"
                  data-id={book.item_id}
                  className="btn btn-none text-primary fw-light"
                  onClick={() => handleDeleteBook(book.item_id)}
                >
                  Remove
                </button>
                <div className="vr" />
                <button
                  type="button"
                  className="btn btn-none text-primary fw-light"
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="w-50">
              <div className="d-flex gap-5 h-100 align-items-center mediaQueryBookProgress">
                <div className="d-flex h-100 align-items-center gap-5">
                  <div style={{ width: "75px" }} className="ps-3">
                    <CompletionCircle completePer={bookCompPer} />
                  </div>
                  <div>
                    <p>
                      {bookCompPer}%
                      <br />
                      Complete
                    </p>
                  </div>
                </div>
                <div className="vr" />
                <div>
                  <p className="text-secondary fs-6">CURRENT CHAPTER</p>
                  <p>
                    Chapter #: {Math.ceil((totalChapters * bookCompPer) / 100)} off{" "}
                    {totalChapters}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "max-content" }}
                  >
                    UPDATE PROGRESS
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetail;
