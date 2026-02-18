import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SpotDetail.module.css";
import { getSpotDetail } from "@/libs/microcms";

export default async function SpotDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const spot = await getSpotDetail(params.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{spot.title}</h1>

      <a
        href={spot.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageWrapper}
      >
        <Image
          src={spot.image.url}
          alt={spot.name}
          width={800}
          height={600}
          className={styles.image}
        />
      </a>

      <p className={styles.description}>{spot.description}</p>

      <div className={styles.backWrapper}>
        <Link href="/" className={styles.back}>
          ← トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
