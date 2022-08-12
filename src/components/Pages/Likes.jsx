import React from "react";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Likes.module.scss";

const Likes = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>LIKES</PageInfo>
        </div>
        {/* <List /> */}
        {/* <Message>No item found</Message> */}
      </div>
    </div>
  );
};

export default Likes;
