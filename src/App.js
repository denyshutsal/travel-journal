import Header from "./components/header/Header";
import Card from "./components/card/Card";
import data from "./data";
import "./App.scss";

function App() {
  const cards = data.map((data) => <Card key={data.id} {...data} />);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">{cards}</div>
      </main>
    </div>
  );
}

export default App;
