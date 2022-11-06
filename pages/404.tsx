import Head from "next/head";
import { NotExist } from "../components";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 not found</title>
      </Head>
      <NotExist />
    </>
  );
}
