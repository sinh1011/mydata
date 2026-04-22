import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <>
      <InputName></InputName>
      <TodoLists></TodoLists>
      <DarkMode></DarkMode>
    </>
  );
}

function InputName() {
  const [name, setName] = useState(() => {
    const data = localStorage.getItem("name");
    return data ? JSON.parse(data) : "";
  });
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    setName(input);
    setInput("");
  };

  const hanleReset = () => {
    setName("");
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Name"
        ></input>
        <button type="submit">Save</button>
        <button onClick={hanleReset} type="button">
          Reset
        </button>
      </form>
      {name ? <p>Hello: {name}</p> : <p>No Data</p>}
    </div>
  );
}

function DarkMode() {
  const [dark, setDark] = useState(() => {
    const data = localStorage.getItem("dark");
    return data ? JSON.parse(data) : false;
  });

  const handleDark = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <button onClick={handleDark}>{dark ? "Light Mode" : "Night Mode"}</button>
    </>
  );
}

function TodoLists() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    setInput("");
    setTodos((prev) => [...prev, { id: Date.now(), name: input }]);
  };

  const handleReset = () => {
    setInput("");
    setTodos([]);
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((i) => {
        return i.id !== id;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your Work"
        ></input>
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {todos.length === 0 ? (
        <p>No Work</p>
      ) : (
        todos.map((i) => {
          return (
            <div key={i.id}>
              <p>- {i.name}</p>
              <button
                onClick={() => {
                  handleDelete(i.id);
                }}
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
