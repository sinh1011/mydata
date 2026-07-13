import { useState } from "react";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Ẩn đồng hồ" : "Hiện đồng hồ"}
        </button>
        {show && <Timer></Timer>}
      </div>
    </>
  );
}

export default App;
