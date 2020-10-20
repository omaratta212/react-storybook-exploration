import React from "react";
import {ButtonProps} from "./ButtonProps";
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button className={styles.btn}>{props.text}</button>
  )
}
