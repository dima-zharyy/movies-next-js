import { Header } from "../Header/Header";
import Head from "next/head";
import { ReactNode } from "react";

type TLayoutProps = {
  children: ReactNode;
};

export const SharedLayout: React.FC<TLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
