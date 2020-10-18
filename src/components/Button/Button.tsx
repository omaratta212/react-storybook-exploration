import React from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './Button.module.scss';

export const Button = (props: ButtonProps) => {

  return (
    <button className={styles.btnStyle}>{props.text}</button>
  )
}
