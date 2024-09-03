import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{
        textAlign: "center"
      }}>
        <h1>Coucou David</h1>
        <h2>Tu es le meilleur dev du monde !! 😁🔥</h2>
      </div>

    </main>
  );
}
