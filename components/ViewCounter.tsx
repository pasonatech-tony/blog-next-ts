import { useState, useEffect } from "react";
import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const API_URL = process.env.API_URL || "https://blog-next-ts-hazel.vercel.app";

export default function ViewCounter({
  slug,
  blogPage = false,
  update = false,
}) {
  const { data } = useSWR(`${API_URL}/api/views/${slug}`, fetcher);
  const [hasMounted, setHasMounted] = useState(false);
  const views = data?.total;
  console.log(`${API_URL}/api/views/${slug}`);

  useEffect(() => {
    if (!hasMounted && blogPage && update) {
      setHasMounted(true);
      fetch(`${API_URL}/api/views/${slug}`, {
        method: "POST",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [slug, blogPage, hasMounted, update]);

  console.log(views, "---- views");

  return <div>{views} views</div>;
}
