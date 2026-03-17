import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Test></Test>
      <hr />
      <Bai1></Bai1>
      <hr />
      <Bai2></Bai2>
      <hr />
      <Bai3></Bai3>
      <hr />
      <Bai4></Bai4>
      <hr />
    </>
  );
}

function Test() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text.toUpperCase()}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

function Bai1() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        value={input}
        placeholder="Nhập nội dung"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Bạn đang gõ: {input} </p>
    </>
  );
}

function Bai2() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        value={input}
        placeholder="Nhập nội dung"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Bạn đang gõ: {input.toUpperCase()} </p>
    </>
  );
}

function Bai3() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        value={input}
        placeholder="Nhập nội dung"
        onChange={(e) => {
          const value = e.target.value;
          if (value.length > 10) return;
          setInput(value);
        }}
      />

      <p>Bạn đang gõ: {input.toUpperCase()} </p>
    </>
  );
}

function Bai4() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Eat" },
    { id: 2, text: "Code" },
    { id: 3, text: "sleep" },
  ]);
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          if (input.trim() === "") return;
          setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
          setInput("");
        }}
      >
        Add
      </button>
      <div>
        {todos.map((i) => (
          <div key={i.id}>
            <p>- {i.text}</p>
          </div>
        ))}
      </div>
      <p>{input}</p>
    </>
  );
}

export default App;
