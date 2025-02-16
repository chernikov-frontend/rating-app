
import Stars from "./components/Stars";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Рейтинг фильмов</h1>
      <Stars count={3} />
      <Stars count={5} />
      <Stars count={0} />
      <Stars count={6} />
      <Stars count={2} />
    </div>
  );
}

export default App;
