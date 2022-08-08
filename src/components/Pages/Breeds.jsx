import React from "react";
import { ArrowIcon, SortAZIcon, SortZAIcon } from "../../assets";
import BackButton from "../BackButton/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import PageInfo from "../UI/PageInfo";
import styles from "./Breeds.module.scss";

const Breeds = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>BREEDS</PageInfo>
          <select
            name="breed"
            className={`${styles.select} ${styles.breed}`}
            defaultValue=""
          >
            <option value="">All Breeds</option>
          </select>

          <select
            name="limit"
            className={`${styles.select} ${styles.limit}`}
            defaultValue={10}
          >
            <option value={5}>Limit: 5</option>
            <option value={10}>Limit: 10</option>
            <option value={15}>Limit: 15</option>
            <option value={20}>Limit: 20</option>
          </select>
          <div className={styles.sort}>
            <SortAZIcon />
          </div>
          <div className={styles.sort}>
            <SortZAIcon />
          </div>
        </div>

        <List />
        <div className={`${styles.nav}`}>
          <button
            className={`${styles["nav-btn"]} ${styles["nav-prev"]} ${styles["nav-disabled"]}`}
          >
            <ArrowIcon />
            <span>PREV</span>
          </button>

          <button
            className={`${styles["nav-btn"]} ${styles["nav-next"]} ${styles["nav-avilable"]}`}
          >
            <span>NEXT</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breeds;
