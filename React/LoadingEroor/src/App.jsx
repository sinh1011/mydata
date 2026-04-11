import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <GetName></GetName>
    </>
  );
}

function GetName() {
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
      console.log(data);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterUsers = users.filter((users) => {
    return users.name.toLowerCase().includes(inputSearch.toLowerCase());
  });
  console.log(filterUsers);

  return (
    <>
      {loading && <p>LOADING....</p>}
      {error && <p>Lỗi rồi: {error}</p>}
      {users.map((items) => {
        return (
          <p key={items.id}>
            Name: {items.name} - Gmail: {items.email}
          </p>
        );
      })}

      <label htmlFor="">
        Search{" "}
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Input Text"
        ></input>
      </label>
      {console.log(inputSearch)}

      {filterUsers.map((users) => {
        return (
          <p key={users.id}>
            Name: {users.name} - email: {users.email}
          </p>
        );
      })}

      <button onClick={fetchData}>Refresh API</button>
    </>
  );
}

export default App;
