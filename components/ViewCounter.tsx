import { useState, useEffect } from "react";
import useSWR from "swr";
import type { SWRConfiguration } from "swr";

const config: SWRConfiguration = {
  fallbackData: "fallback",
  revalidateOnMount: true,
  refreshInterval: 0,
};

async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const API_URL = process.env.API_URL || "http://localhost:3000";

export default function ViewCounter({ slug, blogPage = false }) {
  const { data, error } = useSWR(
    `${API_URL}/api/views/${slug}`,
    fetcher,
    config
  );
  const [hasMounted, setHasMounted] = useState(false);
  const [hasSentPost, setHasSentPost] = useState(false);
  const views = parseInt(data?.total);

  useEffect(() => {
    setHasMounted(true);
    if (!hasSentPost && blogPage) {
      setHasSentPost(true);
      fetch(`${API_URL}/api/views/${slug}`, {
        method: "POST",
      });
    }
  }, []);

  return <div>{views > 0 ? views.toLocaleString() : "–––"} views</div>;
}
