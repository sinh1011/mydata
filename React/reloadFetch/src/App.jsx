import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Name />
    </>
  );
}

function Name() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Lỗi API");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError("Lỗi rồi");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase()),
  );

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <p>Tìm kiếm</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập tên"
      />

      {filterUser.map((user) => {
        return (
          <p key={user.id}>
            Name: {user.name} - Email: {user.email}
          </p>
        );
      })}
    </>
  );
}

export default App;
