// import Head from "next/head";

import { MoviesList } from "../components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getTrending } from "../service/api";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getTrending();

  if (!movies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movies }, // will be passed to the page component as props
  };
};

export default function Home({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactNode {
  return (
    <>
      <Head>
        <title>Trending today</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Trending today</h1>
        {movies && <MoviesList movies={movies.results} />}
      </div>
    </>
  );
}
