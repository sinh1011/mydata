import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setIput] = useState(0);
  useEffect(() => {
    console.log("Cos gì đó thay đổi");
    count>5&&console.log("to big");
    
    

  }, [count,input]);

  return (
    <>
    <p>Count: {count}</p>
    <p>Input: {input}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>Change Count</button>
      <button onClick={()=>setIput(prev=>prev+1)}>Change Input</button>
    </>
  );
}

export default App;
