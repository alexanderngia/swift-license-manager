import styles from "@pages/index.module.scss";
import { GetStaticProps } from "next/types";
import { getLicenseList } from "@service/licenseService";
import { LicenseList } from "@type/license";
import React from "react";
import Layout from "@components/layout";
import { ButtonMain } from "@components/button";
import Table from "@components/table";
import { useRouter } from "next/router";
import { Plus } from "@components/icons";
import useSWR from "swr";
import Loading from "@components/loading";

export default function Home() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_GET_LICENSE_LIST}`,
    getLicenseList
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;
  return (
    <Layout title="Swift License Manager">
      <div className={styles["root"]}>
        <div className={styles["heading"]}>
          <div className={styles["title"]}>
            <h1>License Theme Manager</h1>
            <p>Dashboard</p>
          </div>
          <ButtonMain
            classname={styles["button"]}
            onClick={() => {
              router.push("/create-license");
            }}
          >
            <Plus customClass={styles["plusIcon"]} />
          </ButtonMain>
        </div>
        <div className={styles["table"]}>
          <Table data={data} />
        </div>
      </div>
    </Layout>
  );
}
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await getLicenseList();
//   return {
//     props: {
//       data,
//     },
//     revalidate: 1,
//   };
// };
