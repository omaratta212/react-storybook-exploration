import React from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './Button.module.scss';
import {Loading} from "../icons/Loading";

export const Button: React.FC<ButtonProps> = (props) => {
  const classNames = `${styles.btn} ${styles[props.size]} ${styles[props.type]}`;

  console.dir(styles)
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
