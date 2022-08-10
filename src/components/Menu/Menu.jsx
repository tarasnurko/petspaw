import React, { useState } from "react";
import styles from "./Menu.module.scss";

import { VotingImage, BreedsImage, GalleryImage } from "../../assets/index";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const url = useLocation();

  useState(() => {}, []);

  return (
    <div className={styles.menu}>
      <Link
        to="/voting"
        className={
          url.pathname === "/voting"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <div className={`${styles.wrapper} ${styles["wrapper-voting"]}`}>
          <img src={VotingImage} alt="voting" />
        </div>
        <button className={styles.button}>VOTING</button>
      </Link>

      <Link
        to="/breeds"
        className={
          url.pathname === "/breeds"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <div className={`${styles.wrapper} ${styles["wrapper-breeds"]}`}>
          <img src={BreedsImage} alt="breeds" />
        </div>
        <button className={styles.button}>BREEDS</button>
      </Link>

      <Link
        to="/gallery"
        className={
          url.pathname === "/gallery"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <div className={`${styles.wrapper} ${styles["wrapper-gallery"]}`}>
          <img src={GalleryImage} alt="gallery" />
        </div>
        <button className={styles.button}>GALLERY</button>
      </Link>
    </div>
  );
};

export default Menu;
