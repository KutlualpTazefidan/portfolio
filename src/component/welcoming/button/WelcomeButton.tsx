import styles from "./button.module.css";
export default function WelcomeButton() {
  return (
    <div className={styles["enter-button"]}>
      <div className={styles["enter-button-container"]}>
        {/* <span className={styles["enter-button-text-loading"]}>loading </span> */}
        <span className={styles["enter-button-text-enter"]}>enter</span>
      </div>
    </div>
  );
}
