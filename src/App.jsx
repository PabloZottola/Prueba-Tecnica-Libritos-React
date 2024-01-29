import BookList from "./components/BookList";

function App() {
  return (
    <>
      <main className="w-3/5 m-auto">
        <section>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] justify-items-center gap-3 m-6 text-white">
            <BookList />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
