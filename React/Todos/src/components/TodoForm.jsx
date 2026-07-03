export default function TodoForm({
  input,
  setInput,
  handleSubmit,
  handleReset,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Nhập công việc"
        ></input>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => handleReset()}>
          Reset
        </button>
      </form>
    </>
  );
}
