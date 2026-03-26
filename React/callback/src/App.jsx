import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <CountApp></CountApp>
      <DisplayInput></DisplayInput>
    </>
  );
}
function TodosApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
    // 3. add todo mới
    setInput("");
  };
  const handleRefresh = () => {
    setTodos([]);
  };

  return (
    <>
      <TodoForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        handleRefresh={handleRefresh}
      />

      <TodoList todos={todos} />
    </>
  );
}

function TodoForm({ input, setInput, handleSubmit, handleRefresh }) {
  return (
    <form onSubmit={handleSubmit}>
      <TodosInput input={input} setInput={setInput} />
      <button type="submit">ADD</button>
      <button type="button" onClick={handleRefresh}>
        Refresh
      </button>
    </form>
  );
}

function TodosInput({ input, setInput }) {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Your text"
    />
  );
}

function TodoList({ todos }) {
  return (
    <>
      {todos.length === 0 ? (
        <p>Chưa có nhiệm vụ</p>
      ) : (
        todos.map((todo) => <p key={todo.id}>- {todo.text}</p>)
      )}
    </>
  );
}

function CountApp() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handRefresh = () => {
    setCount(0);
  };
  return (
    <>
      <h1>{count}</h1>
      <ButtonCount
        handRefresh={handRefresh}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      ></ButtonCount>
    </>
  );
}

function ButtonCount({ handleIncrease, handleDecrease, handRefresh }) {
  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handRefresh}>Refresh</button>
    </>
  );
}

function DisplayInput() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setShow(input);
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <InputShow input={input} setInput={setInput}></InputShow>
        <ButtonShowInput></ButtonShowInput>
        <DisplayShowInput show={show}></DisplayShowInput>
      </form>
    </>
  );
}
function InputShow({ input, setInput }) {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
function ButtonShowInput() {
  return (
    <>
      <button type="submit">send</button>
    </>
  );
}
function DisplayShowInput({ show }) {
  return <>{!show ? <p>bạn chưa nhập gì</p> : <p>Bạn đã nhập: {show}</p>}</>;
}

export default App;
