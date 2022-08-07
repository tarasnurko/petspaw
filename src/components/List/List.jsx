import React from "react";
import styles from "./List.module.scss";

const List = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.block} ${styles["block-1"]}`}></div>
      <div className={`${styles.block} ${styles["block-2"]}`}></div>
      <div className={`${styles.block} ${styles["block-3"]}`}></div>
      <div className={`${styles.block} ${styles["block-4"]}`}></div>
      <div className={`${styles.block} ${styles["block-5"]}`}></div>

      <div
        className={`${styles.block} ${styles["block-1"]} ${styles.reverse}`}
      ></div>
      <div
        className={`${styles.block} ${styles["block-2"]} ${styles.reverse}`}
      ></div>
      <div
        className={`${styles.block} ${styles["block-3"]} ${styles.reverse}`}
      ></div>
      <div
        className={`${styles.block} ${styles["block-4"]} ${styles.reverse}`}
      ></div>
      <div
        className={`${styles.block} ${styles["block-5"]} ${styles.reverse}`}
      ></div>
    </div>
  );
};

export default List;
