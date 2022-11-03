// import { getCredits } from "service";
// import { CastList } from "../components";
import { useRouter } from "next/router";

const Cast = () => {
  const router = useRouter();
  console.log(router);
  return <h1>Cast Info</h1>;
  // <CastList castInfo={castInfo} />;
};

export default Cast;

// https://nextjs.org/blog/layouts-rfc#layouts
