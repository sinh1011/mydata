import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Demo></Demo>
      <Todo></Todo>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

function Toogle() {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <p>{toogle ? "Công tắc đang: BẬT" : "Công tắc đang: TẮT"}</p>
      <button onClick={() => setToogle((prev) => !prev)}>
        {toogle ? "Tắt" : "Bật"}
      </button>
    </>
  );
}

function CounterLevel1() {
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

function Demo() {
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <p>{text}</p>
    </>
  );
}

function Todo() {
  const [text, setText] = useState([]);   // list
  const [input, setInput] = useState(""); // input text

  const handleAdd = () => {
    if (input.trim() === "") return;

    setText((prev) => [...prev, input]);
    setInput(""); // ✅ clear input sau khi add
  };

  return (
    <>
      <input
        value={input} // ✅ phải là input state, không phải ""
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <p>TodoList:</p>
      {text.map((item, index) => (
        <p key={index}>- {item}</p>
      ))}
    </>
  );
}

export default App;
