import { useRouter } from "next/router";
import { getDetails } from "../../service/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { CastList, Details } from "../../components";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log(params);
  const movie = await getDetails(params?.slug);

  return {
    props: { movie }, // will be passed to the page component as props
  };
};

export default function Movie(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <Details movie={props.movie} />
      {router?.query?.slug[1] === "cast" && <CastList />}
      {router?.query?.slug[1] === "reviews" && <CastList />}
    </>
  );
}
