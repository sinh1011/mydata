import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Count></Count>
      <Toggle></Toggle>
      <A></A>
    </>
  );
}

function Count() {
  const [num, setNum] = useState(0);

  return (
    <>
      {num}
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
}

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
}

function A() {
  const [num1, setNum1] = useState(0);

  return (
    <>
      <p>{num1}</p>
      <B num1={num1} setNum1={setNum1}/>
    </>
  );
}

function B({ num1, setNum1 }) {
  return (
    <>
      <button onClick={() => setNum1(num1 + 1)}>+</button>
      <button onClick={() => setNum1(num1 - 1)}>-</button>
    </>
  );
}

export default App;
