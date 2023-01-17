import React from "react";
import { useSelector } from "react-redux";
import styles from "./PageInfo.module.scss";

const PageInfo = (props) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const classes = props.active
    ? `${styles.container} ${styles.active}`
    : styles.container;

  return (
    <div className={`${!darkMode ? classes : `${classes} ${styles.dark}`}`}>
      {props.children}
    </div>
  );
};

export default PageInfo;
