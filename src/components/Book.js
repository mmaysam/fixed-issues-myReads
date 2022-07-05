import React from "react";

const Book = ({ book, changeBookShelf }) => {
  const optionArr = [
    { label: "move...", value: "move", dis: true },
    { label: "Cruntly Reading", value: "currentlyReading", dis: false },
    { label: "Read", value: "read", dis: false },
    { label: "Want To Read", value: "wantToRead", dis: false },
    { label: "none", value: "none", dis: false },
  ];
  return (
    <div className="book">
      {book.imageLinks ? (
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193, //   ? `url(${book.imageLinks.thumbnail}) ` // backgroundImage: book.imageLinks.thumbnail
              //   : "",
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf ? book.shelf : "none"}
              onChange={(e) => changeBookShelf(book, e.target.value)}
            >
              {/* <option value="move" disabled>
              Move to...
            </option> */}
              {optionArr.map((item) => (
                <option value={item.value} key={item.value} disabled={item.dis}>
                  {item.label}
                </option>
              ))}
              ;
              {/* 🧨🧨🧨 there was a problem here when i write v letter in the search it gives me an error so i fixed it */}
              {/* <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option> */}
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
      <div className="book-publisher">{book.publisher}</div>
    </div>
  );
};

export default Book;
