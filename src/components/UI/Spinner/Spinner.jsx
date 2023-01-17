import React from "react";
import { SpinnerBigIcon } from "../../../assets";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <SpinnerBigIcon />
    </div>
  );
};

export default Spinner;
