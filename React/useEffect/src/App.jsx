import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Mount />
      <Countt setCount={setCount} />
      <p>{count}</p>
      <Loading />
    </>
  );
}

function Mount() {
  useEffect(() => {
    console.log("component mount");
  }, []);

  return null;
}

function Countt({ setCount }) {
  useEffect(() => {
    setCount(10);
  }, []);

  return null;
}

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>{loading ? "Loading..." : "Done"}</h1>;
}

export default App;