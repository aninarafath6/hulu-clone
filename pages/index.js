import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props) {
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
      {/* result component */}
      <Results results={props.results} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const response = await axios.get(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  return {
    props: {
      results: response.data.results,
    },
  };
};
