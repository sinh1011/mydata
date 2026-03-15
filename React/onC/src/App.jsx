import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Test></Test>
      <Diplay></Diplay>
      <Show></Show>
      <p>----------------------------------------------------</p>
      <EmtyArry></EmtyArry>
      <Count></Count>
      <Toggle></Toggle>
      <p>----------------------------------------------------</p>
      <Sshow></Sshow>
      <Pass></Pass>
      <Menu></Menu>
    </>
  );
}

function Demo() {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
}

function Test() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
          // in ra chữ người dùng gõ
        }}
      />
      <p>{text}</p>
    </>
  );
}

function Diplay() {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>Bạn đang gõ: {text}</p>
    </>
  );
}

function Show() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          return setText(input);
        }}
      >
        Show
      </button>
      <p>Ban da nhap: {text}</p>
    </>
  );
}

function EmtyArry() {
  const arr = [];
  return (
    <>
      <p>{arr && "danh sach trong"}</p>
    </>
  );
}
function Count() {
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
      <p>{count < 0 ? "So dang la so am" : "So dang la so duong"}</p>
    </>
  );
}

function Toggle() {
  const [toggle, setToogle] = useState(false);

  return (
    <>
      <p>{toggle ? "Công tắt đang bật" : "Công tắt đang tắt"}</p>
      <p>{toggle.toString()}</p>
      <button onClick={() => setToogle((prev) => !prev)}>
        {toggle ? "OFF" : "ON"}
      </button>
    </>
  );
}

function Sshow() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "ẨN" : "HIỆN"}
      </button>
      {show && <p>Hello React</p>}
    </>
  );
}

function Pass() {
  const [show, setShow] = useState(false);

  return (
    <>
      <input type={show ? "text" : "password" } placeholder="Nhập mật khẩu" />

      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "ẨN" : "HIỆN"}
      </button>
    </>
  );
}

function Menu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>Menu</button>{" "}
      {show && (
  <div>
    <p>Home</p>
    <p>About</p>
    <p>Contact</p>
  </div>
)}
    </>
  );
}
export default App;
