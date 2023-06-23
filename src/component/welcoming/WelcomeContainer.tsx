import styles from "./welcome.module.css";
import CircleLoader from "react-spinners/CircleLoader";
import { useEffect, useState } from "react";
import WelcomeButton from "./button/WelcomeButton";

export default function WelcomeContainer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={styles["welcome-message-container"]}>
      <span className={styles["welcome-message"]}>Beyond Space and Time</span>
      <span className={styles["portfolio-name2"]}>Kutlualp Tazefidan</span>
      <span className={styles["welcome-note"]}>
        This is a proof of concept.
        <br /> The artwort is created using AI.
      </span>

      {loading ? (
        <>
          <div className={styles["loader-container"]}>
            {/* <CircleLoader
              color={"#000000"}
              // loading={loading}
              size={300}
              aria-label="Loading Spinner"
              data-testid="loader"
              className={styles["loading-icon-static"]}
              speedMultiplier={0.7}
            /> */}
          </div>
          <div className={styles["loading-static-div"]}>
            <span>loading</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles["loader-container"]}>
            {/* <CircleLoader
              color={"#000000"}
              // loading={loading}
              size={300}
              aria-label="Loading Spinner"
              data-testid="loader"
              className={styles["loading-icon"]}
              speedMultiplier={0.7}
            /> */}
          </div>
          <WelcomeButton />
        </>
      )}
      {/* <span className={styles["portfolio-name"]}>Kutlualp Tazefidan</span> */}
    </div>
  );
}
