// 1. Import file CSS module vào đặt tên là "styles"
import styles from "./TodoForm.module.css";

export default function TodoForm({
  input,
  setInput,
  handleSubmit,
  handleReset,
}) {
  return (
    // 2. Gắn styles.formContainer vào thẻ form
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Nhập công việc..."
        // 3. Gắn styles.inputField vào đây
        className={styles.inputField}
      ></input>

      {/* 4. Gắn styles.btnSubmit vào đây */}
      <button type="submit" className={styles.btnSubmit}>
        Submit
      </button>

      {/* 5. Gắn styles.btnReset vào đây */}
      <button type="button" onClick={handleReset} className={styles.btnReset}>
        Reset
      </button>
    </form>
  );
}
