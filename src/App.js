
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import data from "./data";



function App() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });
  return (
    <div className="App">
     
      <NavBar />
      {cards}
    </div>
  );
}

export default App;
