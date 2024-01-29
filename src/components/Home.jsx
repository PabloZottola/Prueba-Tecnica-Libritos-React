import BookList from "./BookList";
import ReadList from "./ReadList";
import book from "../api/book.json";
import useBook from "../hook/useBook";

function Home() {
  const { handleRear } = useBook();
  const localBook = localStorage.getItem("BookList");

  if (!localBook) {
    localStorage.setItem("BookList", JSON.stringify(book.library));
  }

  return (
    <main className="grid grid-cols-6 divide-x">
      <section className="col-span-4 py-6">
        <h2 className="text-white text-center text-3xl font-semibold pb-6">
          Lista de Libros
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] justify-items-center gap-3 mx-6 text-white">
          <BookList handleRear={handleRear} />
        </ul>
      </section>
      <aside className="col-span-2 py-6">
        <h2 className="text-white text-center text-3xl font-semibold pb-6">
          Lista de Lectura
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] justify-items-center gap-3 mx-6 text-white">
          <ReadList />
        </ul>
      </aside>
    </main>
  );
}

export default Home;
