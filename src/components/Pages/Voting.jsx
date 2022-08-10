import React from "react";
import { LikeIcon, FavouriteIcon, DislikeIcon } from "../../assets";
import BackButton from "../BackButton/BackButton";
import Header from "../Header/Header";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Voting.module.scss";

const Voting = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>VOTING</PageInfo>
        </div>

        <div className={styles.main}>
          <img
            className={styles.img}
            src="https://images.pexels.com/photos/12906894/pexels-photo-12906894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
          <div className={styles["voting-container"]}>
            <button
              className={`${styles["voting-item"]} ${styles["voting-like"]}`}
            >
              <LikeIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-fav"]}`}
            >
              <FavouriteIcon />
            </button>
            <button
              className={`${styles["voting-item"]} ${styles["voting-dislike"]}`}
            >
              <DislikeIcon />
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <Message date={"22:35"} icon={<FavouriteIcon />}>
            Image ID: <span>fQSunHvl8</span> was added to Favourites
          </Message>

          <div className={styles.block}>
            <div className={styles.time}>22:35</div>
            <div className={styles.text}>
              Image ID: <span>fQSunHvl8</span> was added to Favourites
            </div>
            <div className={styles.icon}>
              <FavouriteIcon />
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.time}>22:35</div>
            <div className={styles.text}>
              Image ID: <span>fQSunHvl8</span> was added to Favourites
            </div>
            <div className={styles.icon}>
              <FavouriteIcon />
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.time}>22:35</div>
            <div className={styles.text}>
              Image ID: <span>fQSunHvl8</span> was added to Favourites
            </div>
            <div className={styles.icon}>
              <FavouriteIcon />
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.time}>22:35</div>
            <div className={styles.text}>
              Image ID: <span>fQSunHvl8</span> was added to Favourites
            </div>
            <div className={styles.icon}>
              <FavouriteIcon />
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.time}>22:35</div>
            <div className={styles.text}>
              Image ID: <span>fQSunHvl8</span> was added to Favourites
            </div>
            <div className={styles.icon}>
              <FavouriteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;
