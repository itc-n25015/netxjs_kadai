import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SpotDetail.module.css";
import { getSpotDetail } from "@/libs/microcms";
import { notFound } from "next/navigation";

export default async function SpotDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const spot = await getSpotDetail(params.id);

  // 🔴 ここ超重要
  if (!spot) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {spot.title ?? spot.name ?? "No title"}
      </h1>

      {spot.image?.url && (
        <a href={spot.url} target="_blank" rel="noopener noreferrer">
          <Image
            src={spot.image.url}
            alt={spot.name ?? "image"}
            width={800}
            height={600}
            className={styles.image}
          />
        </a>
      )}

      {spot.description && <p>{spot.description}</p>}

      <div className={styles.backWrapper}>
        <Link href="/" className={styles.back}>
          ← トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
