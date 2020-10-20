import React from "react";
import {ButtonProps, ButtonSize, ButtonType} from "./ButtonProps";
import styles from './Button.module.scss';
import {Loading} from "../icons/Loading";

export const Button: React.FC<ButtonProps> = (props) => {
  const classNames = `${styles.btn} ${styles[props.size]} ${styles[props.type]}`;

  return (
    <button
      className={classNames}
      disabled={Boolean(props.disabled)}
    >
      {
        props.loading
          ? <Loading w={20} h={20}/>
          : props.text
      }
    </button>
  )
}

Button.defaultProps = {
  text: "Click Me",
  type: ButtonType.primary,
  size: ButtonSize.large,
  disabled: false,
  loading: false
};
