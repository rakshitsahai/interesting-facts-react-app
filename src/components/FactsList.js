import Fact from "./Fact";

function FactsList(props) {
  const facts = props.facts;
  const setFacts = props.setFacts;

  if (facts.length === 0) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one 😉
      </p>
    );
  }

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
    </section>
  );
}

export default FactsList;
