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
export const ArrowRight: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      width="130"
      height="9"
      viewBox="0 0 130 9"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.354 4.9578C129.549 4.76254 129.549 4.44596 129.354 4.25069L126.172 1.06871C125.976 0.873452 125.66 0.873452 125.464 1.06871C125.269 1.26398 125.269 1.58056 125.464 1.77582L128.293 4.60425L125.464 7.43268C125.269 7.62794 125.269 7.94452 125.464 8.13978C125.66 8.33504 125.976 8.33504 126.172 8.13978L129.354 4.9578ZM0.663086 5.10425L129 5.10425L129 4.10425L0.663086 4.10425L0.663086 5.10425Z"
        fill="black"
      />
    </svg>
  );
};

export const ChevronDown: React.FC<IconsProps> = ({ onClick, customClass }) => {
  return (
    <svg
      onClick={onClick}
      className={classnames(styles["root"], customClass)}
      viewBox="0 0 15 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.8125 0L0 2.8125L7.5 10.3125L15 2.8125L12.1875 0L7.5 4.6875L2.8125 0Z"
        fill="black"
      />
    </svg>
  );
};
