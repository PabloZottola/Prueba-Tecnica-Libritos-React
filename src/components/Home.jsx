import BookList from "./BookList";
import ReadList from "./ReadList";

function Home() {
  return (
    <main className="grid tablet:grid-cols-6 tablet:divide-x tablet:divide-y-0 divide-y desktop:w-10/12 laptop:w-3/4 m-auto tablet:pt-1">
      <section className="tablet:col-span-4 py-5 pr-2">
        <h2 className="text-white text-center text-3xl font-semibold pb-6">
          Lista de Libros
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] justify-items-center gap-2 mx-auto text-white">
          <BookList />
        </ul>
      </section>
      <aside className="tablet:col-span-2 py-5 pl-2">
        <h2 className="text-white text-center text-3xl font-semibold pb-6">
          Lista de Lectura
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] justify-items-center gap-2 mx-auto text-white">
          <ReadList />
        </ul>
      </aside>
    </main>
  );
}

export default Home;
