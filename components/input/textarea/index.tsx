import { ChangeEventHandler } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
export interface InputTextareProps {
  placeholder?: string;
  classname?: string;
  title?: string;
  onChange?: ChangeEventHandler;
  required?: boolean;
  defaultValue?: string;
  customTitle?: string;
}

const InputTextare: React.FC<InputTextareProps> = ({
  placeholder,
  classname,
  onChange,
  title,
  customTitle,
  ...props
}) => {
  return (
    <div className={classnames(styles["root"], classname)}>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        className={classnames(styles["input"])}
        {...props}
      />
      <p className={classnames(styles["title"], customTitle)}>{title}</p>
    </div>
  );
};
export default InputTextare;
