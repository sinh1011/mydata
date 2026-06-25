import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Todos></Todos>
    </>
  );
}

function Todos() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodo((prev) => [...prev, { id: Date.now(), name: input }]);
    setInput("");
  };

  const handleReset = () => {
    setInput("");
    setTodo([]);
  };

  const handleDelete = (id) => {
    setTodo(
      todo.filter((i) => {
        return i.id !== id;
      }),
    );
  };

  console.log(todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Your Text"
        ></input>
        <button type="Submit">ADD</button>
        <button onClick={handleReset} type="button">
          Reset
        </button>
      </form>
      {todo.length === 0 ? (
        <p>No data</p>
      ) : (
        todo.map((i) => {
          return (
            <div key={i.id}>
              <p>- {i.name}</p>
              <button
                onClick={() => {
                  handleDelete(i.id);
                }}
                type="button"
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </>
  );
}
export default App;
