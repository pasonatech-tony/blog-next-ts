import Head from "next/head";

import "../styles/globals.css";

import { Header } from "../components/Header";
import Layout from "components/Layout";
import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  console.clear();
  return (
    <>
      <Head>
        <title>thulinhred</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        <Script
          id="dsq-count-scr"
          src="//{shortname}.disqus.com/count.js"
          async
        />
      </Head>

      <Header />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
