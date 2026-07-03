export default function TodoDislay({ list, handleDelete, toggleComplete }) {
  return (
    <>
      {list.length === 0 && <p>Chưa có công việc nào!</p>}

      {list.map((i) => (
        <div key={i.id}>
          <p
            onClick={() => toggleComplete(i.id)}
            style={{
              cursor: "pointer",
              textDecoration: i.complete ? "line-through" : "none",
              color: i.complete ? "#aaa" : "#000",
            }}
          >
            - {i.name}
          </p>
          <button onClick={() => handleDelete(i.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
