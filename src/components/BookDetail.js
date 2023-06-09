import React from "react";
import BookAction from "./BookAction";
import BookProgress from "./BookProgress";

const BookDetail = () => {
  const booksDB = [
    {
      id: 1,
      type: "Action",
      bookName: "The Hunger Games",
      author: "Suzanne Collins",
    },
    {
      id: 2,
      type: "Science Fiction",
      bookName: "Dune",
      author: "Frank Herbert",
    },
    {
      id: 3,
      type: "Economy",
      bookName: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
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
                <p className="text-primary lh-1">{book.author}</p>
                <BookAction />
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
