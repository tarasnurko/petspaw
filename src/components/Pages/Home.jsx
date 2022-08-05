import React from "react";
import styles from "./Home.module.scss";
import { GirlImage } from "../../assets";

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={GirlImage} alt="girl and pat" />
    </div>
  );
};

export default Home;
