export default function TodoSearch({ search, setSearch }) {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nhập công việc cần tìm..."
      ></input>
    </>
  );
}
