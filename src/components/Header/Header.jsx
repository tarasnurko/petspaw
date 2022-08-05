import React from "react";
import styles from "./Header.module.scss";
import { SearchIcon, LikeIcon, FavouriteIcon, DislikeIcon } from "../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="Search for breeds by name"
        />
        <div className={styles.search}>
          <SearchIcon />
        </div>
      </div>

      <Link to="/likes" className={styles.item}>
        <LikeIcon />
      </Link>
      <Link to="/favourites" className={styles.item}>
        <FavouriteIcon />
      </Link>
      <Link to="/dislikes" className={styles.item}>
        <DislikeIcon />
      </Link>
    </div>
  );
};

export default Header;
