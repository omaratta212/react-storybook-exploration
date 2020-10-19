import React from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
  const classNames = `${styles.btn} ${styles[props.size]} ${styles[props.type]}`;

  console.dir(styles)
  return (
    <button
      className={classNames}
    >
      {props.text}
    </button>
  )
}
