const API_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  "Content-Type": "application/json",
};

export const GetApi = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: API_HEADERS,
    cache: "force-cache",
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const PostApi = async (url: string, payload: unknown) => {
  const res = await fetch(url, {
    method: "POST",
    headers: API_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const IsLocalhost = () => {
  if (typeof window !== "undefined") {
    return (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );
  }
  return process.env.NODE_ENV === "development";
};
