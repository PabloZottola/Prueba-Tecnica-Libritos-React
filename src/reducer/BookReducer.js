import { types } from "../types/types";

export const BookReducer = (state, action) => {
  const { bookRemove, updatedBooks } = action.payload;
  switch (action.type) {
    case types.book.bookList:
      localStorage.setItem("ReadList", JSON.stringify(bookRemove));
      localStorage.setItem("BookList", JSON.stringify(updatedBooks));
      return;
    case types.book.readList:
      localStorage.setItem("ReadList", JSON.stringify(updatedBooks));
      localStorage.setItem("BookList", JSON.stringify(bookRemove));
      return;
  }
};
