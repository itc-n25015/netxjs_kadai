// src/libs/microcms.ts

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN!;
const API_KEY = process.env.MICROCMS_API_KEY!;

/** 一覧取得 */
export async function getSpots() {
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/spots`,
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch spots");
  }

  return res.json();
}


export async function getSpotDetail(id: string) {
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/spots/${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch spot detail");
  }

  return res.json();
}
