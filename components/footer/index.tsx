import styles from "@components/header/index.module.scss";
import Link from "next/link";

import React from "react";

export default function Footer() {
  const navigation = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "contact",
      url: "/contact",
    },
  ];
  return (
    <div className={styles["root"]}>
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
  );
}
