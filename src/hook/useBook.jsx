import { useEffect, useState } from "react";
import book from "../api/book.json";

function useBook() {
  const localBook = localStorage.getItem("BookList");
  const bookList = JSON.parse(localStorage.getItem("BookList"));
  const readList = JSON.parse(localStorage.getItem("ReadList"));
  const [isBook, setIsBook] = useState(bookList);

  useEffect(() => {}, [isBook]);

  if (!localBook) {
    localStorage.setItem("BookList", JSON.stringify(book.library));
    localStorage.setItem("ReadList", JSON.stringify([]));
  }

  const handleBook = (e) => {
    const id = e.target.value;
    const bookListFilter = readList.filter((book) => book.book.ISBN === id);
    const readBookRemove = readList.filter(
      (book) => book.book.ISBN !== bookListFilter[0].book.ISBN
    );

    bookList.push(bookListFilter[0]);
    localStorage.setItem("ReadList", JSON.stringify(readBookRemove));
    localStorage.setItem("BookList", JSON.stringify(bookList));
    setIsBook(readList);
  };

  const handleRead = (e) => {
    const id = e.target.value;
    const readBook = bookList.filter((book) => book.book.ISBN === id);
    const bookRemove = bookList.filter(
      (book) => book.book.ISBN !== readBook[0].book.ISBN
    );
    readList.push(readBook[0]);
    localStorage.setItem("ReadList", JSON.stringify(readList));
    localStorage.setItem("BookList", JSON.stringify(bookRemove));
    setIsBook(readBook);
  };
  return { handleRead, handleBook };
}

export default useBook;
