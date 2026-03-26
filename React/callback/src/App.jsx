import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <TodosApp></TodosApp>
    </>
  );
}
function TodosApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setResult((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleReset = () => {
    setResult([]);
    setInput("");
  };

  return (
    <form onSubmit={handleForm}>
      <InputTodos input={input} setInput={setInput}></InputTodos>
      <ButtonTodos></ButtonTodos>
      <ButtonReset handleReset={handleReset}></ButtonReset>
      <DisplayTodos result={result}></DisplayTodos>
    </form>
  );
}

function InputTodos({ input, setInput }) {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

function ButtonTodos() {
  return <button type="submit">Add</button>;
}

function DisplayTodos({ result }) {
  return (
    <>
      {result.length === 0 ? (
        <p>Chưa có công việc</p>
      ) : (
        result.map((i) => <p key={i.id}>- {i.text}</p>)
      )}
    </>
  );
}

function ButtonReset({ handleReset }) {
  return (
    <>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
export default App;
