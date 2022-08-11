import React from "react";
import styles from "./List.module.scss";

const List = (props) => {
  return (
    <div className={styles.container}>
      {props.images.map((image, index) => {
        const blockId = styles[`block-${(index % 5) + 1}`];
        const cof = Math.ceil((index + 1) / 5) % 2;
        const classes =
          cof !== 0
            ? `${styles.block} ${blockId}`
            : `${styles.block} ${blockId} ${styles.reverse}`;

        return (
          <div
            key={image.id}
            className={classes}
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
        );
      })}
    </div>
  );
};

export default List;
