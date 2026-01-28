import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <List></List>
    </>
  );
}

function List() {
  const [data, setData] = useState([]);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="Name">
          <p>
            {item.name}{" "}
            <button
              onClick={() =>
                setData((prev) => prev.filter((x) => x.id !== item.id))
              }
            >
              Delete
            </button>
          </p>
        </div>
      ))}

      <button
        onClick={() => {
          const id = Date.now();
          setData((prev) => [...prev, { id, name: `New Task with id:${id}` }]);
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;
