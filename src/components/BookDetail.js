import React from "react";

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
          <div key={book.id}>
            <h4>{book.type}</h4>
            <h1>{book.bookName}</h1>
            <p>{book.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetail;
