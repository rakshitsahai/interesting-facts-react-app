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
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);
        let query = supabase.from("facts").select("*");
        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }
        const { data, error } = await query
          .order("created_at", { ascending: true })
          .limit(100);

        if (!error) setFacts(data);
        else alert("There was a problem in fetching data");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

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
        <Category setCurrentCategory={setCurrentCategory} />
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
