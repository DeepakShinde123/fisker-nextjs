import Header from "@/components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-2">
        <section className="w-full md:w3/4 bg-blue-500">
          Preview Component
        </section>
        <aside className="w-full md-w-1/4 bg-red-500">
          {" "}
          Configurator Component
        </aside>
      </main>
    </>
  );
}
export default HomePage;
