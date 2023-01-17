import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import {
  EyeClosedIcon,
  EyeOpenedIcon,
  LogoIcon,
  LogoIconDark,
} from "../../../assets/index";
import Menu from "../../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../../features/theme/themeSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [checkbox, setCheckbox] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleCheckbox = () => {
    setCheckbox((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(setDarkMode(checkbox));
  }, [dispatch, checkbox]);

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.top}>
        <Link to="/" className={styles.logo}>
          {!darkMode ? <LogoIcon /> : <LogoIconDark />}
        </Link>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            {!darkMode ? <EyeOpenedIcon /> : <EyeClosedIcon />}
          </div>
          <div className={styles.switch}>
            <input
              type="checkbox"
              name="mode"
              id="mode"
              value={checkbox}
              onChange={handleCheckbox}
            />
            <label
              className={`${styles.label} ${
                checkbox ? styles["label-active"] : ""
              }`}
              htmlFor="mode"
            >
              <span
                className={`${styles.circle} ${
                  checkbox ? styles["circle-active"] : ""
                }`}
              ></span>
            </label>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Hi there!😊</h1>
      <h2 className={styles.subtitle}>Welcome to PetsPaw application!</h2>
      <p className={styles.text}>Lets start using The Cat API</p>

      <Menu />
    </div>
  );
};

export default Sidebar;
