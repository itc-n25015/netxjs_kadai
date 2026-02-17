// app/spots/page.tsx
import Image from "next/image";
import { getSpots } from "@/libs/microcms";
import styles from "@/styles/spots.module.css";

export default async function SpotsPage() {
  const data = await getSpots();

  return (
    <div className={styles.list}>
      {data.contents.map((spot: any) => (
        <div key={spot.id} className={styles.card}>
          <Image
            src={spot.image.url}
            alt={spot.name}
            width={300}
            height={200}
          />
          <h3>{spot.name}</h3>
          <p>{spot.description}</p>
          <a href={spot.url} target="_blank" rel="noopener noreferrer">
            公式サイト
          </a>
        </div>
      ))}
    </div>
  );
}

