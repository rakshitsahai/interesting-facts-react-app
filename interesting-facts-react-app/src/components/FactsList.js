import Fact from "./Fact";

function FactsList(props) {
  const facts = props.facts;

  return (
    <>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </>
  );
}

export default FactsList;
