import React from "react";
import styles from "./Home.module.scss";
import { GirlImage } from "../../../assets";
import { useSelector } from "react-redux";

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      <img className={styles.image} src={GirlImage} alt="girl and pat" />
    </div>
  );
};

export default Home;
