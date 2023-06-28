import { useState } from "react";
import styles from "./button.module.css";
export default function WelcomeButton() {
  // const [isEnterClicked,setIsEnterClicked] = useState(false);
  const [zoomIn, setZoomIn] = useState("");
  function handleEnterButton() {
    setZoomIn(`zoom-in-globe`);
    // setIsEnterClicked(true)
  }
  return (
    <div className={styles["enter-button"]}>
      <div
        className={`${styles["enter-button-container"]} ${styles[zoomIn]}`}
        onClick={() => handleEnterButton()}
      >
        {/* <span className={styles["enter-button-text-loading"]}>loading </span> */}
        <span className={styles["enter-button-text-enter-front"]}>enter</span>
        <div
          className={`${styles["enter-button-text-enter-back"]} ${styles[zoomIn]}`}
        />
      </div>
    </div>
  );
}
