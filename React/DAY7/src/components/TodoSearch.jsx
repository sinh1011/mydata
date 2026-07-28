import styles from "./TodoSearch.module.css";
export default function TodoSearch({ search, setSearch }) {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nhập công việc cần tìm..."
        className={styles.searchInput}
      ></input>
    </>
  );
}
