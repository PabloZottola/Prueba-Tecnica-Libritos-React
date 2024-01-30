import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function BookList() {
  const { handleRead, bookList } = useContext(BookContext);

  return (
    <>
      {bookList?.map((book) => (
        <li
          key={book.book.ISBN}
          className="flex flex-col gap-1 relative w-44 h-auto"
        >
          <button
            className="absolute right-0 m-2 text-xl bg-slate-700 rounded-full p-[1px] shadow-emerald-700 shadow-inner border-black border-[1px]"
            value={book.book.ISBN}
            onClick={handleRead}
          >
            📖
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

export default BookList;
