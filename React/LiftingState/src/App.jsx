import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Count></Count>
      <Form></Form>
      <hr />
      <TodosApp></TodosApp>
    </>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Displays text={count}></Displays>
      <CountButton setCount={setCount}></CountButton>
    </>
  );
}

function Displays({ text }) {
  return <h1>{text}</h1>;
}

function CountButton({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

function Form() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <Input input={input} setInput={setInput}></Input>
      <ButtonSubmit
        input={input}
        setResult={setResult}
        setInput={setInput}
      ></ButtonSubmit>
      <p>Bạn đã nhập: {result}</p>
    </>
  );
}

function Input({ setInput, input }) {
  return (
    <>
      <input
        type="text"
        placeholder="Your text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

function ButtonSubmit({ input, setResult, setInput }) {
  return (
    <button
      onClick={() => {
        setResult(input);
        setInput("");
      }}
    >
      Submit
    </button>
  );
}

function TodosApp() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <TodosInput input={input} setInput={setInput}></TodosInput>
      <TodosAdd
        input={input}
        setInput={setInput}
        setResult={setResult}
      ></TodosAdd>
      <TodoList result={result}></TodoList>
    </>
  );
}

function TodosInput({ input, setInput }) {
  return (
    <>
      <input
        type="text"
        placeholder="Your Text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

function TodosAdd({ setInput, input, setResult }) {
  const handleAdd = () => {
      if (!input.trim()) return;
    setResult((prev) => {
      return [...prev, { id: Date.now(), text: input }];
    });
    setInput("");
  };
  return (
    <>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        ADD
      </button>
    </>
  );
}

function TodoList({ result }) {
  console.log(result);

  return (
    <>
      {result.length === 0 ? (
        <p>chưa có nhiệm vụ</p>
      ) : (
        result.map((i) => {
          return (
            <div key={i.id}>
              <p>- {i.text}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
