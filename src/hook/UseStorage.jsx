import { useEffect } from "react";
import book from "../api/book.json";

export const UseStorage = ({ isBook }) => {
  console.log(book)
  useEffect(() => {
    if (!localStorage.getItem("BookList")) {
      localStorage.setItem("BookList", JSON.stringify(book.library));
      localStorage.setItem("ReadList", JSON.stringify([]));
    }
    const handleStorageChange = () => {
      location.reload();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isBook]);
};
