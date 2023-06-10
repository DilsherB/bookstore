import React from "react";
import BookDetail from "./BookDetail";
import NewBookForm from "./NewBookForm";

const Books = () => {
  return (
    <div>
      <BookDetail />
      <hr className="my-5" style={{ height: "2px" }} />
      <NewBookForm />
    </div>
  );
};

export default Books;
