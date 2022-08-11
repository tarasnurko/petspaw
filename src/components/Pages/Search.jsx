import React from "react";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>SEARCH</PageInfo>
        </div>
        <div className={styles.text}>
          Search results for: <span>Cymric</span>
        </div>
        <List />
        {/* <Message>No item found</Message> */}
      </div>
    </div>
  );
};

export default Search;
