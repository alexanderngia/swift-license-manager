import Head from "next/head";
import Image from "next/image";
import styles from "@pages/create-license/index.module.scss";

import { LicenseList } from "@type/license";
import React from "react";
import Layout from "@components/layout";

export default function CreateLicense({ data }: LicenseList) {
  return (
    <Layout title="Create License Key">
      <div className={styles["root"]}>
        <p>Create License Key</p>
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
      </div>
    </Layout>
  );
}
