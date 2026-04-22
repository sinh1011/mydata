import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <LocalStorage />
    </>
  );
}

function LocalStorage() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodolist((prev) => [...prev, { id: Date.now(), name: input }]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodolist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setInput("");
    setTodolist([]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your Text"
        />
        <button type="submit">ADD</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {todolist.length === 0 && <p>No Data</p>}

      {todolist.map((item) => (
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
