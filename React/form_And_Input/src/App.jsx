import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Form></Form>
      <Form1></Form1>
      <hr />
      <FormTodo></FormTodo>
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

function TestForm() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Form() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        placeholder="Nhập gì đó"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="Submit">Submit</button>
    </form>
  );
}

function Form1() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập text"
      />
      <button type="submit">ADD</button>
      <p>{result}</p>
    </form>
  );
}

function FormTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input }]);

    setInput("");
  };
  const handleDelete = (id) => {

    setTodos(todos.filter((i) => i.id !== id))
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">ADD</button>
      {todos.map((i) => {
        return (
          <div key={i.id}>
            <p>
              - {i.text} <button type="button" onClick={()=>handleDelete(i.id)}>Delete</button>
            </p>
          </div>
        );
      })}
    </form>
  );
}
export default App;
