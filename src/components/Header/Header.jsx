import React, { useState } from "react";
import styles from "./Header.module.scss";
import { SearchIcon, LikeIcon, FavouriteIcon, DislikeIcon } from "../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState("");
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim().length) {
      navigate(`/search?name=${input}`);
    }
  };

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="Search for breeds by name"
          onChange={handleInputChange}
          value={input}
        />
        <button to="/search" className={styles.search} onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

      <div className={styles.icons}>
        <Link
          to="/likes"
          className={
            location.pathname === "/likes"
              ? `${styles.item} ${styles.active}`
              : `${styles.item} ${styles.default}`
          }
        >
          <LikeIcon />
        </Link>
        <Link
          to="/favourites"
          className={
            location.pathname === "/favourites"
              ? `${styles.item} ${styles.active}`
              : `${styles.item} ${styles.default}`
          }
        >
          <FavouriteIcon />
        </Link>
        <Link
          to="/dislikes"
          className={
            location.pathname === "/dislikes"
              ? `${styles.item} ${styles.active}`
              : `${styles.item} ${styles.default}`
          }
        >
          <DislikeIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
