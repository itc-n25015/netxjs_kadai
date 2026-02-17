// src/components/Hero.tsx
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image src="/images/hero.jpg" fill alt="カフェ" />
      <div className={styles.text}>
        <h1>Okinawa Favorite Spots</h1>
        <p>お気に入りの場所を写真で紹介</p>
      </div>
    </section>
  );
}
