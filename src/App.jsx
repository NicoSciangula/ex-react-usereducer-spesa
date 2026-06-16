import ListItem from "./components/ListItem";

function App() {
  return (
    <>
      <header className="bg-warning">
        <div className="text-center">
          <h1>Carello della spesa</h1>
        </div>
      </header>
      <main className="bg-info p-3">
        <ListItem />
      </main>
    </>
  );
}

export default App;
