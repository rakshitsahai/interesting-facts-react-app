import Header from "./components/Header";
import ShareAFact from "./components/ShareAFact";
import Category from "./components/Category";
import FactsList from "./components/FactsList";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <ShareAFact />
      <main className="main">
        <Category />
        <FactsList />
      </main>
    </>
  );
}

export default App;
