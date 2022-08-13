import React from "react";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Favourites.module.scss";
import {
  useGetFavouritesQuery,
  useRemoveFavouriteMutation,
} from "../../features/api/apiSlice";
import Spinner from "../UI/Spinner";

const Favourites = () => {
  const { data: favourites = [], isLoading: favouritesIsLoading } =
    useGetFavouritesQuery();

  console.log(favourites);

  return (
    <div className={styles.container}>
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
