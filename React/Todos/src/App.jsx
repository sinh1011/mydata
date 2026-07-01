import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <TodoApp></TodoApp>
    </>
  );
}

function TodoApp() {
  const [list, setList] = useState(() => {
    const saveList = localStorage.getItem("todos_list");
    return saveList ? JSON.parse(saveList) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todos_list", JSON.stringify(list));
  }, [list]);
  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setList((prev) => [
      ...prev,
      { name: input, id: Date.now(), complete: false },
    ]);
    setInput("");
  };

  const handleReset = () => {
    setInput("");
    setSearch("");
    setList([]);
  };

  const handleDelete = (id) => {
    setList((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleComplete = (id) => {
    setList((prev) =>
      prev.map((i) => (i.id === id ? { ...i, complete: !i.complete } : i)),
    );
  };

  const listFilter = list.filter((i) => {
    const matchersSearch = i.name.toLowerCase().includes(search.toLowerCase());
    if (filter === "Active") return !i.complete && matchersSearch;
    if (filter === "Done") return i.complete && matchersSearch;
    return matchersSearch;
  });

  return (
    <>
      <Search search={search} setSearch={setSearch}></Search>
      <Form
        list={list}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      ></Form>
      <select
        id="filterSearch"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value={"All"}>All</option>
        <option value={"Active"}>Active</option>
        <option value={"Done"}>Done</option>
      </select>
      <Display
        list={listFilter}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
      ></Display>
    </>
  );
}
function Form({ list, input, setInput, handleSubmit, handleReset }) {
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

function Display({ list, handleDelete, toggleComplete }) {
  return (
    <>
      {list.length === 0 && <p>Chưa có công việc nào!</p>}

      {list.map((i) => (
        <div key={i.id}>
          <p
            onClick={() => toggleComplete(i.id)}
            style={{
              cursor: "pointer",
              textDecoration: i.complete ? "line-through" : "none",
              color: i.complete ? "#aaa" : "#000",
            }}
          >
            - {i.name}
          </p>
          <button onClick={() => handleDelete(i.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

function Search({ search, setSearch }) {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nhập công việc cần tìm"
      ></input>
    </>
  );
}

export default App;
