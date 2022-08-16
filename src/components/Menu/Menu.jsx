import React from "react";
import styles from "./Menu.module.scss";

import { useSelector } from "react-redux";
import { VotingImage, BreedsImage, GalleryImage } from "../../assets/index";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const url = useLocation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`${!darkMode ? styles.menu : `${styles.menu} ${styles.dark}`}`}
    >
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
