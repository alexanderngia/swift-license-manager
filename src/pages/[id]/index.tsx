import { GetStaticProps, NextPage } from "next";
import router, { useRouter } from "next/dist/client/router";
import { ChangeEvent, useState } from "react";

import styles from "./index.module.scss";
import {
  deleteLicense,
  getLicenseById,
  getLicensePath,
} from "@service/licenseService";
import { LicenseList } from "@type/license";
import Layout from "@components/layout";
import InputText from "@components/input";
import { ButtonMain, ButtonSub } from "@components/button";
import { ChevronDown, Minus, Plus } from "@components/icons";
import classNames from "classnames";
import Link from "next/link";

interface SingleLicenseProps {
  licenseInfo: LicenseList;
}
export interface Form {
  status: number;
  name: string;
  email: string;
  domain: string;
  shopId: number | null;
  licenseKey: string;
}
const SingleLicense: NextPage<SingleLicenseProps> = ({ licenseInfo }) => {
  const router = useRouter();

  const [formValues, setFormValues] = useState<Form>({
    status: licenseInfo.licenseStatus,
    name: `${licenseInfo.customerName}`,
    email: `${licenseInfo.customerEmail}`,
    domain: `${licenseInfo.domain}`,
    shopId: licenseInfo.shopId,
    licenseKey: `${licenseInfo.licenseKey}`,
  });
  const Submit = async (id: any) => {
    try {
      if (licenseInfo) {
        let confirmDelete = prompt(
          `Nhập DELETE vào ô để xác nhận xóa license của ${licenseInfo.domain}!`,
          ""
        );
        if (confirmDelete === "DELETE") {
          let res = await deleteLicense(id);
          const errMessage = res?.data.errMessage;
          const message = res?.data.message;
          if (errMessage) {
            alert(errMessage);
          }
          if (message) {
            alert(`License của ${licenseInfo.domain + message}`);
            router.push("/");
          }
        }
        if (confirmDelete === "" || null) {
          alert(`Xóa license của ${licenseInfo.domain} thất bại`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Create License Key">
      <div className={styles["root"]}>
        <div className={styles["heading"]}>
          <h1>License Information</h1>
          <span>
            <Link href="/">License Management</Link>
            <p>&#9679;</p>
            <p>License Information</p>
          </span>
        </div>
        <div className={styles["main"]}>
          <div className={styles["title"]}>
            <p>Client Information</p>
          </div>
          <div className={styles["form"]}>
            <InputText
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, name: e.target.value });
              }}
              defaultValue={formValues.name}
              classname={styles["input"]}
              title="Tên khách hàng"
              type="text"
              required
            />
            <InputText
              defaultValue={formValues.email}
              classname={styles["input"]}
              title="Email khách hàng"
              type="email"
              required
            />
            <InputText
              defaultValue={formValues.domain}
              classname={styles["input"]}
              title="Shopify domain"
              type="text"
              required
            />
          </div>
          <div className={styles["message"]}>
            <p
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              Status:
              <span
                style={{
                  marginLeft: `10px`,
                  borderRadius: `15px`,
                  display: `block`,
                  height: `10px`,
                  width: `10px`,
                  backgroundColor: `${
                    formValues.status === 1 ? "#1fcf00" : "#8f8f8f"
                  }`,
                }}
              ></span>
            </p>
            <p>
              Shop Id: <strong>{formValues.shopId}</strong>
            </p>
            <p className={styles["key"]}>
              License Key:
              {formValues.licenseKey && <span>{formValues.licenseKey}</span>}
            </p>
          </div>
        </div>
        <div className={styles["btn-row"]}>
          <ButtonSub
            classname={styles["button"]}
            onClick={() => {
              router.push("/");
            }}
          >
            <ChevronDown customClass={styles["icon"]} />
            Back
          </ButtonSub>
          <ButtonMain
            type="submit"
            classname={classNames(styles["button"], styles["delete"])}
            onClick={() => {
              Submit(licenseInfo.id);
            }}
          >
            Delete
          </ButtonMain>
        </div>
      </div>
    </Layout>
  );
};
export default SingleLicense;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id }: any = params;
  const licenseInfo = await getLicenseById(Number(id));

  if (!licenseInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      licenseInfo,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getLicensePath();
  return { paths, fallback: false };
};
