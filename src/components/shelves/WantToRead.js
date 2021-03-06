import React from "react";
import Shelf from "./Shelf";

const WantToRead = ({ books, updateBookShelf }) => {
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  return (
    <div>
      <Shelf
        title="Want To Read "
        books={wantToRead}
        updateBookShelf={updateBookShelf}
      />
    </div>
  );
};
export default WantToRead;
