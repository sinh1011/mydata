import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter></Counter>
      <hr />
      <MirrorText></MirrorText>
      <DisplayMap></DisplayMap>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
    </>
  );
}

function MirrorText() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
    </>
  );
}

function DisplayMap() {
  const [list, setList] = useState(["Học HTML", "Học CSS", "Học React"]);
  return (
    <>
      <ul>
        {" "}
        {list.map((i) => {
          return <li>{i}</li>;
        })}
      </ul>
    </>
  );
}
export default App;
