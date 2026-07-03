import "./App.css";
import TodoShow from "./components/TodoShow";
import TodoPost from "./components/TodoPost";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <TodoPost list={list} setList={setList}></TodoPost>
      <TodoShow list={list} setList={setList}></TodoShow>
    </>
  );
}

export default App;
