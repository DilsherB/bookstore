import React from "react";
// import BookAction from "./BookAction";
import BookProgress from "./BookProgress";

const BookDetail = () => {
  const booksDB = [
    {
      id: 1,
      type: "Action",
      bookName: "The Hunger Games",
      author: "Suzanne Collins",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
    },
    {
      id: 2,
      type: "Science Fiction",
      bookName: "Dune",
      author: "Frank Herbert",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
    },
    {
      id: 3,
      type: "Economy",
      bookName: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
      CommentsBtn: "Comments",
      RemoveBtn: "Remove",
      EditBtn: "Edit",
    },
  ];
  return (
    <div>
      {booksDB.map((book) => {
        return (
          <>
            <div className="d-flex bg-white p-3 my-3 border rounded justify-content-between">
              <div key={book.id} className="my-3">
                <p className="fw-bold text-secondary lh-1">{book.type}</p>
                <p className="fw-bold fs-4 lh-1">{book.bookName}</p>
                <p className="text-primary lh-1 fw-light">{book.author}</p>
                <p
                  className="text-primary fw-light d-flex gap-3 pt-3"
                  style={{ cursor: "pointer" }}
                >
                  <span>{book.CommentsBtn}</span>
                  <div className="vr" />
                  <span>{book.RemoveBtn}</span>
                  <div className="vr" />
                  <span>{book.EditBtn}</span>
                </p>
              </div>
              <div>
                <BookProgress />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BookDetail;
