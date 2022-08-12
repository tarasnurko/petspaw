import React from "react";
import { Link } from "react-router-dom";
import { LikeIcon } from "../../assets";
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

        const block =
          props.type === "breeds" ? (
            <div
              key={image.id}
              className={`${classes} ${styles.breeds}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {props.breedId && props.breedName && (
                <Link to={props.breedId} className={styles.name}>
                  {props.breedName}
                </Link>
              )}
            </div>
          ) : props.type === "favourites" ? (
            <div
              key={image.id}
              className={`${classes} ${styles.favourites}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className={styles.like}>
                <LikeIcon />
              </div>
            </div>
          ) : (
            <div></div>
          );

        return block;
      })}
    </div>
  );
};

export default List;
