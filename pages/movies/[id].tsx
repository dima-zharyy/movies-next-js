import { useRouter } from "next/router";
import { getDetails } from "../../service/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IMovieDetails } from "../../service/apiTypes";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const movie = await getDetails(params?.id);

  return {
    props: { movie }, // will be passed to the page component as props
  };
};

export default function Movie({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>Movie Page</h1>;
}
