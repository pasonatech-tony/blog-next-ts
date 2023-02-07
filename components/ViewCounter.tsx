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
  console.log("host", `${API_URL}/api/views/${slug}`);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();

    console.log(views, "---- views");
  }, [slug]);
  return <div>{views} views</div>;
}
