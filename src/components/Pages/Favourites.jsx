import React from "react";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>FAVOURITES</PageInfo>
        </div>
        {/* <List /> */}
        <Message>No item found</Message>
        <div className={styles.actions}>
          <Message date="22:35">
            Image ID: <span>fQSunHvl8</span> was removed from Favourites
          </Message>
          <Message date="22:35">
            Image ID: <span>fQSunHvl8</span> was removed from Favourites
          </Message>
          <Message date="22:35">
            Image ID: <span>fQSunHvl8</span> was removed from Favourites
          </Message>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
