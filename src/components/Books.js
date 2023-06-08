import React from "react";
import BookDetail from "./BookDetail";
import BookAction from "./BookAction";
import BookProgress from "./BookProgress";

const Books = () => {
  return (
    <div>
      <BookDetail />
      <BookAction />
      <BookProgress />
    </div>
  );
};

export default Books;
