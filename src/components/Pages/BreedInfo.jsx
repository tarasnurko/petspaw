import React from "react";
import BackButton from "../BackButton/BackButton";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import PageInfo from "../UI/PageInfo";
import styles from "./BreedInfo.module.scss";

const BreedInfo = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo>BREEDS</PageInfo>
          <PageInfo active>28</PageInfo>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default BreedInfo;
