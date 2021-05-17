import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="hulu-clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header component */}
      <Header />
    </div>
  );
}
