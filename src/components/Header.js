import ShareAFact from "./ShareAFact";

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="68"
          width="68"
          alt="Interesting Facts Logo"
        />
        <h1>Interesting Facts</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => props.setShowFactForm((showFactForm) => !showFactForm)}
      >
        {props.showFactForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
