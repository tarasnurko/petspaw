import React from "react";
import styles from "./Message.module.scss";

const Message = (props) => {
  return (
    <div
      className={styles.container}
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
