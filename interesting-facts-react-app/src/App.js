import { useState } from "react";
import Header from "./components/Header";
import ShareAFact from "./components/ShareAFact";
import Category from "./components/Category";
import FactsList from "./components/FactsList";
import "./style.css";

function App() {
  const [showFactForm, setShowFactForm] = useState(false);

  return (
    <>
      <Header showFactForm={showFactForm} setShowFactForm={setShowFactForm} />
      {showFactForm ? <ShareAFact /> : null}
      <main className="main">
        <Category />
        <FactsList />
      </main>
    </>
  );
}

export default App;
