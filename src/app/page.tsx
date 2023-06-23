"use client";
import Image from "next/image";
import styles from "./page.module.css";
import WelcomeContainer from "@/component/welcoming/WelcomeContainer";
import CanvasContainer from "@/component/CanvasContainer/CanvasContainer";

export default function Home() {
  // handling or testing loading

  return (
    <main className={styles["main-container"]}>
      {/* <WelcomeContainer /> */}
      <CanvasContainer />
      {/* <TreeOfLife /> */}
    </main>
  );
}
