import { useEffect } from "react";

export const UseStorage = ({ isBook }) => {
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
