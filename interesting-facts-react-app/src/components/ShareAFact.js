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

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function ShareAFact(props) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("https://www.example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function submitForm(event) {
    event.preventDefault();
    if (
      text &&
      source &&
      category &&
      textLength <= 200 &&
      isValidHttpUrl(source)
    ) {
      const fact = {
        id: Math.round(Math.random() * 1000000),
        text: text,
        source: source,
        category: category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };

      props.setFacts(() => [fact, ...props.facts]);

      setText("");
      setSource("");
      setCategory("");

      props.setShowFactForm(() => false);
    }
  }

  return (
    <form className="fact-form">
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(event) => setSource(event.target.value)}
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" onClick={submitForm}>
        Post
      </button>
    </form>
  );
}

export default ShareAFact;
