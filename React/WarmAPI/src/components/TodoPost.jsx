import { useState } from "react";

export default function TodoPost({ list, setList }) {
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    const newTodo = {
      id: Date.now(),
      todo: input,
      completed: false,
      userId: 1,
    };
    try {
      const res = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      setList([data, ...list]);
      setInput("");
    } catch (error) {
      console.log("co loi", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Yout Text"
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
}
