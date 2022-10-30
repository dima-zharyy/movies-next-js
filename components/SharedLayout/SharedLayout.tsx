import { Header } from "../Header/Header";
import Head from "next/head";
import { ReactNode } from "react";

type TLayout = {
  children: ReactNode;
};

export const SharedLayout: React.FC<TLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
