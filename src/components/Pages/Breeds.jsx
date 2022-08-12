import React, { useState } from "react";
import { ArrowIcon, SortAZIcon, SortZAIcon } from "../../assets";
import BackButton from "../UI/BackButton";
import Header from "../Header/Header";
import List from "../List/List";
import PageInfo from "../UI/PageInfo";
import styles from "./Breeds.module.scss";
import {
  useGetBreedImagesQuery,
  useGetBreedsQuery,
} from "../../features/api/apiSlice";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";

const Breeds = () => {
  const [breedId, setBreedId] = useState("");
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("Rand");
  const [page, setPage] = useState(1);

  const { data: breeds } = useGetBreedsQuery();
  const { data: breedImages, isLoading: imagesIsLoading } =
    useGetBreedImagesQuery({
      breedId,
      limit,
      order,
      page,
    });

  const handleBreedId = (e) => {
    setBreedId(e.target.value);
    setPage(1);
  };

  const handleLimit = (e) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1);
  };

  const handleOrder = (order) => {
    setOrder(order);
    setPage(1);
  };

  const checkPrevPage = () => page > 1;
  const checkNextPage = () => limit === breedImages.length;

  const handlePage = (direction) => {
    if (direction === "prev" && checkPrevPage()) {
      setPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && checkNextPage()) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <BackButton />
          <PageInfo active>BREEDS</PageInfo>
          <select
            name="breed"
            className={`${styles.select} ${styles.breed}`}
            disabled={!breeds ? true : false}
            onChange={handleBreedId}
          >
            <option value="">All Breeds</option>
            {breeds &&
              breeds.length &&
              breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
          </select>

          <select
            name="limit"
            className={`${styles.select} ${styles.limit}`}
            defaultValue={10}
            onChange={handleLimit}
          >
            <option value={5}>Limit: 5</option>
            <option value={10}>Limit: 10</option>
            <option value={15}>Limit: 15</option>
            <option value={20}>Limit: 20</option>
          </select>
          <div className={styles.sort} onClick={() => handleOrder("Asc")}>
            <SortAZIcon />
          </div>
          <div className={styles.sort} onClick={() => handleOrder("Desc")}>
            <SortZAIcon />
          </div>
        </div>

        {imagesIsLoading ? (
          <Spinner />
        ) : !breedImages.length ? (
          <Message>No items found</Message>
        ) : (
          <>
            <List
              type="breeds"
              breedId={breedId}
              breedName={breedImages[0]?.breeds[0]?.name}
              images={breedImages.map((item) => ({
                url: item.url,
                id: item.id,
              }))}
            />
            <div className={`${styles.nav}`}>
              <button
                className={`${styles["nav-btn"]} ${styles["nav-prev"]} ${
                  checkPrevPage()
                    ? styles["nav-aviable"]
                    : styles["nav-disabled"]
                }`}
                onClick={() => handlePage("prev")}
              >
                <ArrowIcon />
                <span>PREV</span>
              </button>

              <button
                className={`${styles["nav-btn"]} ${styles["nav-next"]} ${
                  checkNextPage()
                    ? styles["nav-aviable"]
                    : styles["nav-disabled"]
                }`}
                onClick={() => handlePage("next")}
              >
                <span>NEXT</span>
                <ArrowIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Breeds;
