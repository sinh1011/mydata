import styles from "./TodoDisplay.module.css";
export default function TodoDisplay({ list, handleDelete, toggleComplete }) {
  return (
    <>
      {list.length === 0 && <p>Chưa có công việc nào!</p>}

      {list.map((i) => (
        <div key={i.id} className={styles.TodoItem}>
          <p
            className={`${styles.TodoText} ${i.complete ? styles.complete : ""}`}
            onClick={() => toggleComplete(i.id)}
          >
            - {i.name}
          </p>
          <button
            className={`${styles.TodoButton}`}
            onClick={() => handleDelete(i.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
