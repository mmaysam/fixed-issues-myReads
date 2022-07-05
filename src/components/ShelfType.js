import React from "react";
import CurrentlyReading from "./shelves/CurrentlyReading";
import Read from "./shelves/Read";
import WantToRead from "./shelves/WantToRead";

const ShelfType = ({ books, updateBookShelf }) => {
  return (
    <div>
      <CurrentlyReading books={books} updateBookShelf={updateBookShelf} />
      <Read books={books} updateBookShelf={updateBookShelf} />
      <WantToRead books={books} updateBookShelf={updateBookShelf} />
    </div>
  );
};

export default ShelfType;
