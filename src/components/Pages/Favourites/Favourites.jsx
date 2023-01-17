import React from "react";
import BackButton from "../../UI/BackButton/BackButton";
import Header from "../../Header/Header";
import List from "../../List/List";
import Message from "../../UI/Message/Message";
import PageInfo from "../../UI/PageInfo/PageInfo";
import styles from "./Favourites.module.scss";
import { useGetFavouritesQuery } from "../../../features/api/apiSlice";
import Spinner from "../../UI/Spinner/Spinner";
import { useSelector } from "react-redux";

const Favourites = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { data: favourites = [], isLoading: favouritesIsLoading } =
    useGetFavouritesQuery();

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
          <PageInfo active>FAVOURITES</PageInfo>
        </div>
        {favouritesIsLoading ? (
          <Spinner />
        ) : favourites.length ? (
          <List
            images={favourites.map((favourite) => ({
              url: favourite.image.url,
              id: favourite.image_id,
            }))}
          />
        ) : (
          <Message>No item found</Message>
        )}
      </div>
    </div>
  );
};

export default Favourites;
