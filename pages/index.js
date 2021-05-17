import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

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
      {/* nav bar component */}
      <Nav />
    </div>
  );
}
