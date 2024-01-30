import { useEffect, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import book from "../api/book.json";

function BookProvider({ children }) {
  const localBook = localStorage.getItem("BookList");
  const bookList = JSON.parse(localStorage.getItem("BookList"));
  const readList = JSON.parse(localStorage.getItem("ReadList"));
  const [isBook, setIsBook] = useState(localBook);

  useEffect(() => {
    const handleStorageChange = () => {
      location.reload();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isBook]);

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
    setIsBook(bookList);
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
    setIsBook(bookList);
  };
  return (
    <BookContext.Provider
      value={{
        handleRead,
        readList,
        handleBook,
        bookList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
