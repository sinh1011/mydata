import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

function TodoApp() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodoList((prev) => [...prev, { id: Date.now(), name: input }]);
    setInput("");
  };

  const handleReset = () => {
    setTodoList([]);
    setSearch("");
    setInput("");
  };

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((i) => i.id !== id));
  };

  const filteredTodos = todoList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <TodoForm
        input={input}
        setInput={setInput}
        handleAdd={handleAdd}
        handleReset={handleReset}
      />

      <SearchBox search={search} setSearch={setSearch} />

      <TodoDisplay filteredTodos={filteredTodos} handleDelete={handleDelete} />
    </>
  );
}

function TodoForm({ input, setInput, handleAdd, handleReset }) {
  return (
    <form onSubmit={handleAdd}>
      <TodoInput input={input} setInput={setInput} />
      <TodoAdd />
      <ResetButton handleReset={handleReset} />
    </form>
  );
}

function TodoInput({ input, setInput }) {
  return (
    <label>
      Công việc:
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Your Text"
      />
    </label>
  );
}

function TodoAdd() {
  return <button type="submit">Add</button>;
}

function ResetButton({ handleReset }) {
  return (
    <button type="button" onClick={handleReset}>
      Reset
    </button>
  );
}

function SearchBox({ search, setSearch }) {
  return (
    <label>
      Search{" "}
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </label>
  );
}

function TodoDisplay({ filteredTodos, handleDelete }) {
  if (filteredTodos.length === 0) {
    return <p>Chưa có công việc</p>;
  }

  return (
    <>
      {filteredTodos.map((item) => (
        <div key={item.id}>
          <p>- {item.name}</p>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
