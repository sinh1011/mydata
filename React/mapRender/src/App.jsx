import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Name></Name>
      <Number></Number>
      <Obj></Obj>
      <Delete></Delete>
      <hr />
      <TodoList></TodoList>
    </>
  );
}

function Name() {
  const names = ["An", "Bình", "Chi", "Dũng"];
  return (
    <>
      {names.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </>
  );
}

function Number() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((i, index) => (
        <p key={index}>Số:{i}</p>
      ))}
    </>
  );
}

function Obj() {
  const users = [
    { id: 1, name: "An", age: 20 },
    { id: 2, name: "Bình", age: 22 },
    { id: 3, name: "Chi", age: 19 },
  ];
  return (
    <>
      {users.map((i) => (
        <p key={i.id}>
          {i.name} - {i.age}
        </p>
      ))}
    </>
  );
}

function Delete() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React" },
    { id: 2, text: "Ăn cơm" },
    { id: 3, text: "Đi ngủ" },
  ]);
  const [input, setInput] = useState("");
  const handleDelete = (i) => {
    setTodos((prev) => prev.filter((item) => item.id !== i));
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (input.trim() === "") return;
          setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
          setInput("");
        }}
      >
        ADD
      </button>

      {todos.map((i) => (
        <p key={i.id}>
          - {i.text} id:{i.id} <button onClick={() => handleDelete(i.id)}>x</button>
        </p>
      ))}
    </>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React" },
    { id: 2, text: "Ăn cơm" },
    { id: 3, text: "Đi ngủ" },
  ]);

  return (
  <>
    {todos.length === 0 ? (
      <p>Không có việc nào</p>
    ) : (
      todos.map((todo) => (
        <p key={todo.id}>- {todo.text}</p>
      ))
    )}
  </>
);
}


export default App;
