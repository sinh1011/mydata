import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoDisplay from "./components/TodoDisplay";
import TodoSearch from "./components/TodoSearch";

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
    setFilter("All");
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
      <TodoSearch search={search} setSearch={setSearch}></TodoSearch>
      <TodoForm
        list={list}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      ></TodoForm>
      <select
        id="filterSearch"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value={"All"}>All</option>
        <option value={"Active"}>Active</option>
        <option value={"Done"}>Done</option>
      </select>
      <TodoDisplay
        list={listFilter}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
      ></TodoDisplay>
    </>
  );
}

export default App;
