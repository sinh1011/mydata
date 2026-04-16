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
  const [filter, setFilter] = useState("all");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), name: input, done: false },
    ]);
    setInput("");
  };

  console.log(todoList);

  const handleReset = () => {
    setTodoList([]);
    setSearch("");
    setInput("");
  };

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((i) => i.id !== id));
  };

  const handleToogle = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const filteredTodos = todoList.filter((item) => {
    const filterSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const status =
      filter === "all" ? true : filter === "done" ? item.done : !item.done;

    return filterSearch && status;
  });

  return (
    <>
      <TodoForm
        input={input}
        setInput={setInput}
        handleAdd={handleAdd}
        handleReset={handleReset}
      />

      <SearchBox search={search} setSearch={setSearch} setFilter={setFilter} />

      <TodoDisplay
        filteredTodos={filteredTodos}
        handleDelete={handleDelete}
        handleToogle={handleToogle}
      />
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

function SearchBox({ search, setSearch, setFilter }) {
  return (
    <label>
      Search{" "}
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("done")}>Done</button>
    </label>
  );
}

function TodoDisplay({ filteredTodos, handleDelete, handleToogle }) {
  if (filteredTodos.length === 0) {
    return <p>Chưa có công việc</p>;
  }

  return (
    <>
      {filteredTodos.map((item) => (
        <div key={item.id}>
          <p
            onClick={() => handleToogle(item.id)}
            style={{ textDecoration: item.done ? "line-through" : "none" }}
          >
            {item.name}
          </p>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
