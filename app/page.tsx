// src/app/page.tsx
import { getSpots } from "@/libs/microcms";
import SpotCard from "@/components/SpotCard";
import SearchBox from "@/components/SearchBox";
import styles from "@/styles/Hero.module.css";

export default async function Home() {
  const data = await getSpots();

  return (
    <main className={styles.container}>
      {/* タイトル */}
      <h1 className={styles.title}>Okinawa Cafe Spot</h1>

      {/* 検索欄 */}
      <SearchBox />

      {/* 写真一覧 */}
      <div className={styles.grid}>
        {data.contents.map((spot: any) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </main>
  );
}
