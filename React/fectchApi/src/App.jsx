import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <FirstFetch></FirstFetch>
      <Demo></Demo>
    </>
  );
}

function FirstFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      )}
    </>
  );
}
function Demo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/abc");

        if (!res.ok) {
          throw new Error("Lỗi fetch API");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Lỗi rồi");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}
export default App;
