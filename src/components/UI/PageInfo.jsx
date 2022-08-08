import React from "react";
import styles from "./PageInfo.module.scss";

const PageInfo = (props) => {
  const classes = props.active
    ? `${styles.container} ${styles.active}`
    : styles.container;

  return <div className={classes}>{props.children}</div>;
};

export default PageInfo;
