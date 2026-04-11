import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <ShowUsers></ShowUsers>
    </>
  );
}

function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Lỗi API");
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(inputSearch);

  const filterUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(inputSearch.toLowerCase());
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <>
      <label>
        Search{" "}
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="YourText"
        />
      </label>
      {loading && <p>Loading....</p>}
      {error && <p>Lỗi: {error}</p>}
      {filterUsers.map((users) => {
        return (
          <p key={users.id}>
            Name: {users.name} - Email: {users.email}
          </p>
        );
      })}
      <button onClick={fetchData}>Refresh API</button>
    </>
  );
}

export default App;
