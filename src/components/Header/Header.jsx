import React, { useState } from "react";
import styles from "./Header.module.scss";
import { SearchIcon, LikeIcon, FavouriteIcon, DislikeIcon } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const url = useLocation();
  const [input, setInput] = useState("");
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      {url.pathname !== "/search" ? (
        <Link to="/search" className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder="Search for breeds by name"
          />
          <button to="/search" className={styles.search}>
            <SearchIcon />
          </button>
        </Link>
      ) : (
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            placeholder="Search for breeds by name"
            onChange={handleInputChange}
            value={input}
          />
          <button
            to="/search"
            className={styles.search}
            onClick={() => props.onSearch(input)}
          >
            <SearchIcon />
          </button>
        </div>
      )}

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
