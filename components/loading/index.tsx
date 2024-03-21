import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextProps {
  classname?: string;
  onChange?: ChangeEventHandler;
}

const Loading: React.FC<InputTextProps> = ({
  classname,
  onChange,
  ...props
}) => {
  return (
    <div className={styles["root"]}>
      <svg
        className={styles["ip"]}
        viewBox="0 0 256 128"
        width="256px"
        height="128px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#7961ff" />
            <stop offset="33%" stop-color="#593bff" />
            <stop offset="67%" stop-color="#6d81fe" />
            <stop offset="100%" stop-color="#a696fe" />
          </linearGradient>
          <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stop-color="#a696fe" />
            <stop offset="33%" stop-color="#6d81fe" />
            <stop offset="67%" stop-color="#593bff" />
            <stop offset="100%" stop-color="#7961ff" />
          </linearGradient>
        </defs>
        <g fill="none" stroke-linecap="round" stroke-width="16">
          <g className={styles["ip__track"]} stroke="#ddd">
            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
          </g>
          <g stroke-dasharray="180 656">
            <path
              className={styles["ip__worm1"]}
              stroke="url(#grad1)"
              stroke-dashoffset="0"
              d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
            />
            <path
              className={styles["ip__worm2"]}
              stroke="url(#grad2)"
              stroke-dashoffset="358"
              d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export default Loading;
