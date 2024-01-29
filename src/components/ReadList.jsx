function ReadList() {
  const readBookList = JSON.parse(localStorage.getItem("ReadList"));
  return (
    <>
      {readBookList?.map((book) => (
        <li
          key={book.book.ISBN}
          className="flex flex-col gap-1 relative w-44 h-auto"
        >
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
