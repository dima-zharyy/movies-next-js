import { useRouter } from "next/router";
import { getCredits, getDetails, getReviews } from "../../service/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { CastList, Details, ReviewsList } from "../../components";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.slug;

  const [movie, reviews, castInfo] = await Promise.all([
    getDetails(id),
    getReviews(id),
    getCredits(id),
  ]);

  return {
    props: { movie, reviews, castInfo }, // will be passed to the page component as props
  };
};

export default function Movie({
  movie,
  reviews,
  castInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  let isCast = false;
  let isReviews = false;

  if (router.query.slug) {
    isCast = router.query?.slug[1] === "cast";
    isReviews = router.query?.slug[1] === "reviews";
  }

  return (
    <>
      <Details movie={movie} />
      {isCast && <CastList castInfo={castInfo} />}
      {isReviews && <ReviewsList reviews={reviews} />}
    </>
  );
}
