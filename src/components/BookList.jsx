import React, { useEffect } from "react";
import useBook from "../hook/useBook";

function BookList() {
  const { handleRear, isBook } = useBook();
  useEffect(() => {}, [isBook]);

  return (
    <>
      {isBook.map((book) => (
        <li key={book.book.ISBN} className="relative">
          <button
            className="absolute right-0 m-2 text-xl"
            value={book.book.ISBN}
            onClick={handleRear}
          >
            📖
          </button>
          <img src={book.book.cover} alt={book.book.tittle} />
          <p>{book.book.title}</p>
          <p>{book.book.genre}</p>
          <p>{book.book.year}</p>
          <p>{book.book.synopsis}</p>
        </li>
      ))}
    </>
  );
}

export default BookList;
