"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import dotenv from "dotenv";

dotenv.config();

interface IHomeState {
  domain: string;
  licenseKey: string;
}

export default function Home() {
  const [state, setState] = useState<IHomeState>({
    domain: "",
    licenseKey: "",
  });

  const handleGenerateLicense = async (domain: any) => {
    if (process.env.NEXT_PUBLIC_DOMAIN) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CREATE_LICENSE_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ domain: state.domain }),
        }
      );
      const data = await response.json();
      setState({ ...state, licenseKey: data.licenseKey });
      console.log();
    }
  };

  return (
    <main className={styles.main}>
      <h1>Generate License Key</h1>
      <input
        type="text"
        placeholder="Enter domain"
        value={state.domain}
        onChange={(e) => setState({ ...state, domain: e.target.value })}
      />
      <button
        onClick={() => {
          handleGenerateLicense(state.domain);
          console.log(state.domain);
        }}
      >
        Generate License
      </button>
      {state.licenseKey && <div>License Key: {state.licenseKey}</div>}
    </main>
  );
}
