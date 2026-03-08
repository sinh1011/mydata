import "./App.css";

function App() {
  const names = ["An", "Binh", "Chi"];
  return (
    <>
      <Hello name={"Sinh"}></Hello>
      <User name="An" age={20} />
      <User name="Binh" age={22} />
      <Items names={names}></Items>
    </>
  );
}

function Hello({ name }) {
  return (
    <>
      <p>Hello {name}</p>
    </>
  );
}

function User({ name, age }) {
  return (
    <>
      <p>
        {name} - {age}
      </p>
    </>
  );
}

function Items({names}) {
  return (
    <>
      {names.map((i) => {
        return <p>{i}</p>;
      })}
    </>
  );
}
export default App;
