import React from "react";
import BackButton from "../UI/BackButton";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
import PageInfo from "../UI/PageInfo";
import styles from "./BreedInfo.module.scss";
import { useParams } from "react-router-dom";
import { useGetBreedImagesQuery } from "../../features/api/apiSlice";
import Spinner from "../UI/Spinner";
import { useSelector } from "react-redux";

const BreedInfo = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { breedId } = useParams();
  const { data: breedImages, isLoading } = useGetBreedImagesQuery({
    breedId,
    limit: 8,
  });

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo>BREEDS</PageInfo>
          <PageInfo active>{breedId}</PageInfo>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Carousel
              images={breedImages.map((item) => ({
                id: item.id,
                url: item.url,
              }))}
            />
            <div className={styles.bottom}>
              <h2 className={styles.name}>{breedImages[0].breeds[0].name}</h2>
              <div className={styles.block}>
                <div className={styles.info}>
                  <div className={styles.datum}>Temperament:</div>
                  <div className={styles.text}>
                    {breedImages[0].breeds[0].temperament}
                  </div>
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.info}>
                  <div className={styles.datum}>Origin:</div>
                  <div className={styles.text}>
                    {breedImages[0].breeds[0].origin}
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.datum}>Weight:</div>
                  <div className={styles.text}>
                    {breedImages[0].breeds[0].weight.metric} kg
                  </div>
                </div>
                <div className={styles.info}>
                  <div className={styles.datum}>Life span:</div>
                  <div className={styles.text}>
                    {breedImages[0].breeds[0].life_span} years
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BreedInfo;
