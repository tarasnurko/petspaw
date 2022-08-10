import React from "react";
import styles from "./Header.module.scss";
import { SearchIcon, LikeIcon, FavouriteIcon, DislikeIcon } from "../../assets";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const url = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="Search for breeds by name"
        />
        <Link to="/search" className={styles.search}>
          <SearchIcon />
        </Link>
      </div>

      <Link
        to="/likes"
        className={
          url.pathname === "/likes"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <LikeIcon />
      </Link>
      <Link
        to="/favourites"
        className={
          url.pathname === "/favourites"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <FavouriteIcon />
      </Link>
      <Link
        to="/dislikes"
        className={
          url.pathname === "/dislikes"
            ? `${styles.item} ${styles.active}`
            : `${styles.item} ${styles.default}`
        }
      >
        <DislikeIcon />
      </Link>
    </div>
  );
};

export default Header;
