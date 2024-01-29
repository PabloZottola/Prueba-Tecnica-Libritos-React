import { useState } from "react";
import book from "../api/book.json";

function useBook() {
  if (!localStorage.getItem("BookList")) {
    localStorage.setItem("BookList", JSON.stringify(book.library));
  }

  const bookList = JSON.parse(localStorage.getItem("BookList"));

  const [isBook, setIsBook] = useState(bookList);

  const handleRear = (e) => {
    const id = e.target.value;
    const readBook = bookList.filter((book) => book.book.ISBN === id);

    if (!localStorage.getItem("ReadList")) {
      const bookRemove = bookList.filter(
        (book) => book.book.ISBN !== readBook[0].book.ISBN
      );
      localStorage.setItem("ReadList", JSON.stringify(readBook));
      localStorage.setItem("BookList", JSON.stringify(bookRemove));
      setIsBook(bookRemove);
    } else {
      const readList = JSON.parse(localStorage.getItem("ReadList"));
      const readFind = readList.find(
        (book) => book.book.ISBN === readBook[0].book.ISBN
      );
      if (!readFind) {
        const bookRemove = bookList.filter(
          (book) => book.book.ISBN !== readBook[0].book.ISBN
        );
        readList.push(readBook[0]);
        localStorage.setItem("ReadList", JSON.stringify(readList));
        localStorage.setItem("BookList", JSON.stringify(bookRemove));
        setIsBook(bookRemove);
      }
    }
  };

  return { handleRear, isBook };
}

export default useBook;
