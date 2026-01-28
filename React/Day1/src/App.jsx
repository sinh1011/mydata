import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const arr = ["JS", "React", "Node"];
  const obj = [
    { id: 1, name: "An" },
    { id: 2, name: "Binh" },
  ];

  return (
    <>
      <Render arr={arr}></Render>
      <Display obj={obj}></Display>
      <Numbers></Numbers>
    </>
  );
}

function Render({ arr }) {
  return (
    <>
      {arr.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
}

function Display({ obj }) {
  return (
    <>
      {obj.map((i) => {
        return <p key={i.id}>{i.name}</p>;
      })}
    </>
  );
}

function Numbers() {
  const [nums, setnums] = useState([1,2,3])
  return (
    <>
      <AddNumber nums={nums} />
      <button onClick={() => (setnums([...nums, nums[nums.length-1] + 1]))}>add</button>
    </>
  );
}


function AddNumber({ nums }) {
  return (
    <>
      {nums.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </>
  );
}
export default App;
