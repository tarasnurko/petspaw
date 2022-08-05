import React from "react";
import { ArrowIcon } from "../../../assets";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  return (
    <button className={styles.btn}>
      <ArrowIcon />
    </button>
  );
};

export default BackButton;
