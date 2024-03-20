import InputText from "@components/input";
import { useEffect, useState } from "react";
import styles from "@components/table/index.module.scss";
import moment from "moment";

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
          placeholder="Tìm domain, khách hàng,..."
          defaultValue={q}
          type="text"
          onChange={(e: any) => setQ(e.target.value)}
        />
      </div>
      <table className={styles["root"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Client Name</th>
            <th>Shopify Domain</th>
            <th>Shop ID</th>
            <th>License Key</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {search(data).length > 0 &&
            React.Children.toArray(
              search(data)?.map(
                ({
                  id,
                  licenseStatus,
                  customerName,
                  customerEmail,
                  domain,
                  shopId,
                  licenseKey,
                  createdAt,
                }: LicenseList) => {
                  const formattedDate = moment(createdAt).format(
                    "DD/MM/YYYY HH:mm:ss"
                  );

                  return (
                    <tr>
                      <td>{id}</td>
                      <td
                        style={{
                          padding: `0 40px`,
                          display: `flex`,
                        }}
                      >
                        <span
                          style={{
                            borderRadius: `15px`,
                            display: `block`,
                            height: `10px`,
                            width: `10px`,
                            backgroundColor: `${
                              licenseStatus === 1 ? "#1fcf00" : "#8f8f8f"
                            }`,
                          }}
                        ></span>
                      </td>
                      <td>
                        {customerName} <br />
                        {customerEmail}
                      </td>
                      <td>{domain}</td>
                      <td>{shopId === 0 ? "" : shopId}</td>
                      <td>{licenseKey}</td>
                      <td>{formattedDate}</td>
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
