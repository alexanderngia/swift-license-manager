import styles from "@pages/create-license/index.module.scss";

import { LicenseList } from "@type/license";
import React, { ChangeEvent, useState } from "react";
import Layout from "@components/layout";
import { ButtonMain, ButtonSub } from "@components/button";
import router, { useRouter } from "next/router";
import { ArrowRight, ChevronDown, Plus } from "@components/icons";
import InputText from "@components/input";
import { createLicense } from "@service/licenseService";
import dotenv from "dotenv";

dotenv.config();

export interface Form {
  status: number;
  name: string;
  email: string;
  domain: string;
  shopId: number | null;
  licenseKey: string;
}
export default function CreateLicense() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [formValues, setFormValues] = useState<Form>({
    status: 0,
    name: "",
    email: "",
    domain: "",
    shopId: null,
    licenseKey: "",
  });
  const isFormValid = formValues.name && formValues.email && formValues.domain;
  const submit = async (formValue: Form) => {
    const result = await createLicense(formValue);
    if (result.newLicense) {
      setFormValues({
        ...formValues,
        licenseKey: result.newLicense.licenseKey,
      });
      setMessage("");
    } else {
      setMessage(result.message);
    }
  };
  return (
    <Layout title="Create License Key">
      <div className={styles["root"]}>
        <div className={styles["heading"]}>
          <h1>Create License</h1>
          <span>
            <p>License Management</p>
            <p>&#9679;</p>
            <p>Create License</p>
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
              classname={styles["input"]}
              title="Tên khách hàng"
              type="text"
              required
            />
            <InputText
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, email: e.target.value });
              }}
              classname={styles["input"]}
              title="Email khách hàng"
              type="email"
              required
            />
            <InputText
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, domain: e.target.value });
              }}
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
              License Key: <span>{formValues.licenseKey}</span>
            </p>
            {message && (
              <p className={styles["error"]}>
                Không tạo được license, nguyên nhân: <span>{message}</span>
              </p>
            )}
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
            classname={styles["button"]}
            onClick={() => {
              submit(formValues);
            }}
            disabled={!isFormValid}
          >
            <Plus />
            Create
          </ButtonMain>
        </div>
      </div>
    </Layout>
  );
}
