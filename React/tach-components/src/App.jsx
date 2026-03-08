import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* <Say></Say> */}
      {/* <User name="An" />
      <User name="Binh" />
      <User name="Chi" /> */}

      {/* <Render></Render>

      <Card title="VIP" content="hang xịn" />
      <Card title="FREE" content="hang thường" /> */}

      {/* <MusicList></MusicList> */}
      {/* <FoodItem></FoodItem> */}
      <HappyNewYear></HappyNewYear>
    </>
  );
}

function Say() {
  return (
    <>
      <Hello></Hello>
    </>
  );
}

function Hello() {
  return (
    <>
      <p>Hello</p>
    </>
  );
}

function User({ name }) {
  return (
    <>
      <p>{name}</p>
    </>
  );
}

function Render() {
  const names = ["Ad", "Bis", "Sinh"];
  return (
    <>
      {names.map((i) => (
        <User name={i}></User>
      ))}
    </>
  );
}

function Card({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}

function MusicList() {
  const [songs, setSongs] = useState([
    { id: 1, name: "son tung" },
    { id: 2, name: "den vau" },
    { id: 3, name: "hoang thuy linh" },
  ]);

  const handleDelete = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} onDelete={handleDelete} />
      ))}
    </>
  );
}

function SongItem({ song, onDelete }) {
  return (
    <div>
      <span>{song.name}</span>
      <button onClick={() => onDelete(song.id)}>Delete</button>
      <button onClick={() => alert(song.name)}>Info</button>
    </div>
  );
}

function FoodItem() {
  const [item, setItem] = useState([
    { id: 1, name: "Milk" },
    { id: 2, name: "Egg" },
    { id: 3, name: "Bread" },
  ]);

  const handleDelete = (id) => {
    setItem((prev) => prev.filter((i) => i.id != id));
  };
  return (
    <>
      <div>
        {item.map((i) => (
          <DisplayItem key={i.id} item={i} handleDelete={handleDelete}></DisplayItem>
        ))}
      </div>
    </>
  );
}

function DisplayItem({item, handleDelete}) {
  return (
    <>
      <div>
        <p>{item.name}</p>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
      </div>
    </>
  );
}
function HappyNewYear(){
  return<>
  Chúc mừng năm mới
  </>
}

export default App;
