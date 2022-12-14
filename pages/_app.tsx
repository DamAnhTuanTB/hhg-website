import type { AppProps } from "next/app";
import Head from "next/head"; import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import Layout from "~/components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>HHG BEAUTY</title>
        <meta name="description" content="HHG beauty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
