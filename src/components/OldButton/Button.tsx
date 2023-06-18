import React from "react";
import  styles from "./Button.module.scss";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.btn}>{props.label}</button>;
};

export default Button;