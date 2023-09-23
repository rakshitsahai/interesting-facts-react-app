import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShareAFact from "./components/ShareAFact";
import Category from "./components/Category";
import FactsList from "./components/FactsList";
import supabase from "./supabase";
import Loader from "./components/Loader";

import "./style.css";

function App() {
  const [showFactForm, setShowFactForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("facts")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(100);

      if (!error) setFacts(data);
      else alert("There was a problem in fetching data");
      setIsLoading(false);
    }
    getFacts();
  }, []);

  return (
    <>
      <Header showFactForm={showFactForm} setShowFactForm={setShowFactForm} />
      {showFactForm ? (
        <ShareAFact
          facts={facts}
          setFacts={setFacts}
          setShowFactForm={setShowFactForm}
        />
      ) : null}
      <main className="main">
        <Category />
        {isLoading ? (
          <Loader />
        ) : (
          <FactsList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

export default App;
