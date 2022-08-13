import React, { useState } from "react";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import Message from "../UI/Message";
import PageInfo from "../UI/PageInfo";
import styles from "./Search.module.scss";
import {
  useFindBreedQuery,
  useGetBreedImagesQuery,
} from "../../features/api/apiSlice";
import Spinner from "../UI/Spinner";

const Search = () => {
  const [name, setName] = useState("");
  const { data: searchedBreed = "", isLoading: searchedBreedIsLoading } =
    useFindBreedQuery(name);
  const { data: breedImage = [], isLoading: imagesIsLoading } =
    useGetBreedImagesQuery({ breedId: searchedBreed[0]?.id, limit: 10 });

  const handleName = (newName) => {
    setName(newName);
  };

  return (
    <div className={styles.container}>
      <Header onSearch={handleName} />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>SEARCH</PageInfo>
        </div>
        {!searchedBreedIsLoading && !!searchedBreed.length && (
          <div className={styles.text}>
            Search results for: <span>{searchedBreed[0]?.name}</span>
          </div>
        )}
        {imagesIsLoading ? (
          <Spinner />
        ) : !breedImage?.length ? (
          <Message>No item found</Message>
        ) : (
          <List
            images={breedImage.map((image) => ({
              url: image.url,
              id: image.id,
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
