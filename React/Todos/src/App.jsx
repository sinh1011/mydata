import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <TodoApp></TodoApp>
    </>
  );
}

function TodoApp() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prev) => [...prev, { name: input, id: Date.now() }]);
    setInput("");
  };

  const handleReset = () => {
    setList([]);
  };

  const handleDelete = (id) => {
    setList((prev) => prev.filter((i) => i.id !== id));
  };
  return (
    <>
      <Form
        list={list}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      ></Form>
      <Display list={list} handleDelete={handleDelete}></Display>
    </>
  );
}
function Form({ list, input, setInput, handleSubmit, handleReset }) {
  console.log(list);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Nhập công việc"
        ></input>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => handleReset()}>
          Reset
        </button>
      </form>
    </>
  );
}

function Display({ list, handleDelete }) {
  return (
    <>
      {list.length === 0 && <p>Chưa có công việc nào!</p>}

      {list.map((i) => (
        <div key={i.id}>
          <p>- {i.name}</p>
          <button onClick={() => handleDelete(i.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
