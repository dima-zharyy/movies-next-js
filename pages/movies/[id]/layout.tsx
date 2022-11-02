import { useRouter } from "next/router";
import { getDetails } from "../../../service/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IMovieDetails } from "../../../service/apiTypes";
import { Details } from "../../../components";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const movie = await getDetails(params?.id);

  return {
    props: { movie }, // will be passed to the page component as props
  };
};

export default function Movie(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Details movie={props.movie} />
      {props.children}
    </>
  );
}
