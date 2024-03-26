"use client";
import styles from "@pages/theme-module/index.module.scss";

import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "@components/layout";
import { ButtonMain, ButtonSub } from "@components/button";
import { useRouter } from "next/router";
import { ChevronDown, Plus } from "@components/icons";
import { getCode, updateCode } from "@service/themeService";
import dotenv from "dotenv";
import Link from "next/link";
import InputTextare from "@components/input/textarea";
import useSWR from "swr";
import Loading from "@components/loading";

dotenv.config();

export interface Form {
  id: number;
  code: string;
}

export default function ThemeModule() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const [formValues, setFormValues] = useState<Form>({
    id: 1,
    code: "",
  });
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_GET_MODULE_THEME}`,
    getCode
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;

  const Submit = async (form: Form) => {
    const result = await updateCode(form);
    if (result.message) {
      setMessage(result.message);
    }
    if (result.errMessage) {
      setErrMessage(result.errMessage);
    }
  };

  return (
    <Layout title="Module Management">
      <div className={styles["root"]}>
        <div className={styles["heading"]}>
          <span className={styles["title"]}>
            <h1>Module Management</h1>
            <span>
              <Link href="/">License Management</Link>
              <p>&#9679;</p>
              <p>Module Management</p>
            </span>
          </span>
        </div>
        <div className={styles["main"]}>
          <div className={styles["title"]}>
            <p>Theme Module Code:</p>
          </div>
          <div className={styles["form"]}>
            <InputTextare
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormValues({ ...formValues, code: e.target.value });
              }}
              defaultValue={data.map(({ codeModule }: any) => {
                return codeModule;
              })}
              classname={styles["input"]}
              title="Module & Theme Management"
              required
            />
          </div>
          <div className={styles["message"]}>
            {message && (
              <p className={styles["success"]}>
                <span>{message}</span>
              </p>
            )}
            {errMessage && (
              <p className={styles["error"]}>
                Cập nhật thất bại, nguyên nhân: <span>{errMessage}</span>
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
              Submit(formValues);
            }}
          >
            <Plus />
            Submit
          </ButtonMain>
        </div>
      </div>
    </Layout>
  );
}
