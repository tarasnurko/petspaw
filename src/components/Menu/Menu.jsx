import React from "react";
import styles from "./Menu.module.scss";

import { VotingImage, BreedsImage, GalleryImage } from "../../assets/index";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.item}>
        <div className={`${styles.wrapper} ${styles["wrapper-voting"]}`}>
          <img src={VotingImage} alt="voting" />
        </div>
        <button className={styles.button}>VOTING</button>
      </Link>

      <Link to="/breeds" className={styles.item}>
        <div className={`${styles.wrapper} ${styles["wrapper-breeds"]}`}>
          <img src={BreedsImage} alt="breeds" />
        </div>
        <button className={styles.button}>BREEDS</button>
      </Link>

      <Link to="/gallery" className={styles.item}>
        <div className={`${styles.wrapper} ${styles["wrapper-gallery"]}`}>
          <img src={GalleryImage} alt="gallery" />
        </div>
        <button className={styles.button}>GALLERY</button>
      </Link>
    </div>
  );
};

export default Menu;
