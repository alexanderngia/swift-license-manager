import styles from "@components/layout/index.module.scss";
import Link from "next/link";
import Head from "next/head";

import React, { ReactNode } from "react";
import Header from "@components/header";

interface Iroot {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Iroot) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Swift License Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/swift_favicon.png" />
      </Head>
      <Header />
      <main className={styles["root"]}>{children}</main>
    </>
  );
}
