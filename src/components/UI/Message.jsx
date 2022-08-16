import React from "react";
import { useSelector } from "react-redux";
import styles from "./Message.module.scss";

const Message = (props) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
      style={props.white && { backgroundColor: "#FFFFFF" }}
    >
      {props.date && <div className={styles.date}>{props.date}</div>}
      {props.action}
      <div className={styles.text}>{props.children}</div>
      {props.icon && <div className={styles.icon}>{props.icon}</div>}
    </div>
  );
};

export default Message;
