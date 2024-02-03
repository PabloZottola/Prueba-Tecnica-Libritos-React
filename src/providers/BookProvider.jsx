import { useReducer, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { types } from "../types/types";
import { UseStorage } from "../hook/UseStorage";
import { BookReducer } from "../reducer/BookReducer";

const initialValues = {
  bookRemove: [],
  updatedBooks: [],
};

function BookProvider({ children }) {
  const localBook = localStorage.getItem("BookList");
  const bookList = JSON.parse(localBook) || [];
  const readList = JSON.parse(localStorage.getItem("ReadList")) || [];
  const [isBook, setIsBook] = useState(localBook);
  const [state, dispatch] = useReducer(BookReducer, initialValues);
  UseStorage({ isBook });

  const updateBooks = (type, id, sourceList, destinationList) => {
    const bookFilter = sourceList.filter((book) => book.book.ISBN === id);
    dispatch({
      type,
      payload: {
        bookRemove: sourceList.filter(
          (book) => book.book.ISBN !== bookFilter[0].book.ISBN
        ),
        updatedBooks: [...destinationList, bookFilter[0]],
      },
    });
    setIsBook([...destinationList, bookFilter[0]]);
  };

  const handleBook = (e) => {
    const id = e.target.value;
    updateBooks(types.book.bookList, id, readList, bookList);
  };

  const handleRead = (e) => {
    const id = e.target.value;
    updateBooks(types.book.readList, id, bookList, readList);
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
