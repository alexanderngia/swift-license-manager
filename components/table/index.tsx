import InputText from "@components/input";
import { useEffect, useState } from "react";
import styles from "@components/table/index.module.scss";
import { LicenseList } from "@type/license";
import React from "react";
import { Search } from "@components/icons";
export interface ITable {
  data: LicenseList[];
}
export default function Table({ data }: ITable) {
  const [q, setQ] = useState<string>("");
  const [searchParam, setSearchParam] = useState<Array<string>>([]);
  const search = (data: LicenseList[]) => {
    return data.filter((product: LicenseList) => {
      return searchParam.some((newItem) => {
        return (
          product[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) >
          -1
        );
      });
    });
  };
  useEffect(() => {
    q.length > 0
      ? setSearchParam(["customerName", "customerEmail", "domain", "shopId"])
      : setSearchParam(["customerName", "customerEmail", "domain", "shopId"]);
  }, [q]);
  return (
    <>
      <div className={styles["tool"]}>
        <Search customClass={styles["searchIcon"]} />
        <InputText
          placeholder="Tìm sản phẩm"
          defaultValue={q}
          type="text"
          onChange={(e: any) => setQ(e.target.value)}
        />
      </div>
      <table className={styles["root"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Shopify Domain</th>
            <th>Shop ID</th>
            <th>License Key</th>
          </tr>
        </thead>
        <tbody>
          {search(data).length > 0 &&
            React.Children.toArray(
              search(data)?.map(
                ({
                  id,
                  customerName,
                  customerEmail,
                  domain,
                  shopId,
                  licenseKey,
                }: LicenseList) => {
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>
                        <tr>{customerName}</tr>
                        <tr>{customerEmail}</tr>
                      </td>
                      <td>{domain}</td>
                      <td>{shopId}</td>
                      <td>{licenseKey}</td>
                    </tr>
                  );
                }
              )
            )}
        </tbody>
      </table>
    </>
  );
}
