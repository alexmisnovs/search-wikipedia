import React from "react";
import styles from "./Input.module.css";

const Input = ({ placeholder, ...rest }) => {
  return <input className={styles["input-field"]} placeholder={placeholder} {...rest} />;
};

export default Input;
