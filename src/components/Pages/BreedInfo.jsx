import React from "react";
import BackButton from "../UI/BackButton";
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
        <div className={styles.bottom}>
          <h2 className={styles.name}>Basenji</h2>
          <div className={styles.block}>
            <div className={styles.info}>
              <div className={styles.datum}>Temperament:</div>
              <div className={styles.text}>
                Active, Energetic, Independent, Intelligent, Gentle
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.info}>
              <div className={styles.datum}>Origin:</div>
              <div className={styles.text}>United States</div>
            </div>
            <div className={styles.info}>
              <div className={styles.datum}>Weight:</div>
              <div className={styles.text}>3 - 5 kgs</div>
            </div>
            <div className={styles.info}>
              <div className={styles.datum}>Life span:</div>
              <div className={styles.text}>14 - 15 years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedInfo;
