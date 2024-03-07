import React, { MouseEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

interface IconsProps {
  onClick?: MouseEventHandler;
  customClass?: string;
}

export const Search: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      className={classnames(styles["root"], customClass)}
      onClick={onClick}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <path
          d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM5 11a6 6 0 116 6 6 6 0 01-6-6z"
          data-name="search"
        ></path>
      </g>
    </svg>
  );
};

export const Plus: React.FC<IconsProps> = ({ onClick, customClass }) => {
    return (
      <svg
        className={classnames(styles["root"], customClass)}
        onClick={onClick}
        viewBox="0 0 7 7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.55092 0V2.55092H0V4.25153H2.55092V6.80244H4.25153V4.25153H6.80244V2.55092H4.25153V0H2.55092Z" />
      </svg>
    );
  };
