import Image from "next/image";
import { getSpotDetail } from "@/libs/microcms";
import styles from "@/styles/SpotDetail.module.css";

export default async function SpotDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const spot = await getSpotDetail(params.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{spot.title}</h1>

      <a href={spot.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={spot.image.url}
          alt={spot.name}
          width={800}
          height={600}
          className={styles.image}
        />
      </a>

      <p>{spot.description}</p>
    </div>
  );
}
