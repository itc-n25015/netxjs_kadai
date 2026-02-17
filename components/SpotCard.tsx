// src/components/SpotCard.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SpotCard.module.css";

export default function SpotCard({ spot }: any) {
  return (
    <Link href={`/spots/${spot.id}`} className={styles.card}>
      {/* 🔥 写真の上にタイトル */}
      <h2 className={styles.title}>{spot.title}</h2>

      <div className={styles.imageWrapper}>
        <Image
          src={spot.image.url}
          alt={spot.name}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>
    </Link>
  );
}
