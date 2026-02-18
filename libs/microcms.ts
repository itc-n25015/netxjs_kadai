// src/libs/microcms.ts

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN!;
const apiKey = process.env.MICROCMS_API_KEY!;

const baseUrl = `https://${serviceDomain}.microcms.io/api/v1`;

export async function getSpots() {
  const res = await fetch(`${baseUrl}/spots`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch spots");
  }

  return res.json();
}

export async function getSpotDetail(id: string) {
  const res = await fetch(`${baseUrl}/spots/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch spot detail");
  }

  return res.json();
}
