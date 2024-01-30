import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function ReadList() {
  const { handleBook, readList } = useContext(BookContext);

  return (
    <>
      {readList?.map((book) => (
        <li
          key={book.book.ISBN}
          className="flex flex-col gap-1 relative w-44 h-auto"
        >
          <button
            className="absolute right-0 m-2 text-xl"
            value={book.book.ISBN}
            onClick={handleBook}
          >
            ❌
          </button>
          <img
            className="w-auto h-72"
            src={book.book.cover}
            alt={book.book.tittle}
          />
          <p>{book.book.title}</p>
          <p>{book.book.genre}</p>
          <p>{book.book.year}</p>
        </li>
      ))}
    </>
  );
}

export default ReadList;
