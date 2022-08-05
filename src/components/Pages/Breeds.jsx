import React from "react";
import BackButton from "../UI/BackButton/BackButton";
import Header from "../Header/Header";
import styles from "./Breeds.module.scss";

const Breeds = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Breeds;
