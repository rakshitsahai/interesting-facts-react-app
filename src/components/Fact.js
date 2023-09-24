import supabase from "../supabase";
import { useState } from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed = fact.likes + fact.wow < fact.dislikes;

  async function handleVote(columnName) {
    setIsUpdating(true);

    const { data, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (!error)
      setFacts((facts) => facts.map((f) => (f.id === fact.id ? data[0] : f)));
  }
  return (
    <li key={fact.id} className="fact">
      {isDisputed ? <span className="disputed">[DISPUTED]</span> : null}
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name == fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button onClick={() => handleVote("likes")} disabled={isUpdating}>
          👍 {fact.likes}
        </button>
        <button onClick={() => handleVote("wow")} disabled={isUpdating}>
          😲 {fact.wow}
        </button>
        <button onClick={() => handleVote("dislikes")} disabled={isUpdating}>
          👎 {fact.dislikes}
        </button>
      </div>
    </li>
  );
}

export default Fact;
