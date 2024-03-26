import styles from "@components/header/index.module.scss";
import Link from "next/link";
import Img from "@components/image";

import React from "react";

export default function Header() {
  const navigation = [
    {
      title: "MODULE MANAGEMENT",
      url: "/theme-module",
    },
  ];
  return (
    <div className={styles["root"]}>
      <div className={styles["logo"]}>
        <Link href="/">
          <Img width={90} height={35} alt="swift logo" src="/swift_logo.webp" />
        </Link>
      </div>
      <div className={styles["menu"]}>
        {navigation &&
          React.Children.toArray(
            navigation.map(({ title, url }) => {
              return (
                <Link key={title} href={url}>
                  {title}
                </Link>
              );
            })
          )}
      </div>
    </div>
  );
}
