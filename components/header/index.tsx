import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { LicenseList } from "../../types/license";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const navigation = {
    title: "",
    url: "",
  };
  return (
    <>

      <main className={`${styles.main} ${inter.className}`}>
        {data &&
          React.Children.toArray(
            data.map(
              ({
                customerName,
                customerEmail,
                domain,
                shopId,
                licenseKey,
              }: LicenseList) => {
                return (
                  <ul>
                    <li>{customerName}</li>
                    <li>{customerEmail}</li>
                    <li>{domain}</li>
                    <li>{shopId}</li>
                    <li>{licenseKey}</li>
                  </ul>
                );
              }
            )
          )}
      </main>
    </>
  );
}

