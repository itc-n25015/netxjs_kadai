// src/components/SpotList.tsx
"use client";

import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";
import { getSpots } from "@/libs/microcms";
import styles from "@/styles/SpotList.module.css";

export default function SpotList() {
  const [spots, setSpots] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getSpots().then((data) => setSpots(data.contents));
  }, []);

  const filtered = spots.filter((spot) =>
    spot.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <div className={styles.list}>
        {filtered.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="カフェ名で検索"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
    </>
  );
}
