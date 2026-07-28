import styles from "./Profile.module.css";
export default function Profile() {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.title}>Sinh</h1>
        <p className={styles.subtitle}>React Developer</p>
        <div className={styles.buttonGroup}>
          <button className={styles.btnPrimary}>Follow</button>
          <button className={styles.btnSecondary}>Message</button>
        </div>
      </div>
    </>
  );
}
