import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import Header from "../Header/Header";
import BackButton from "../UI/BackButton";
import PageInfo from "../UI/PageInfo";
import { ReloadIcon, UploadIcon } from "../../assets";
import List from "../List/List";
import UploadModal from "../UploadModal/UploadModal";
import {
  useAddFavouriteMutation,
  useGetBreedImagesQuery,
  useGetBreedsQuery,
} from "../../features/api/apiSlice";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [breedId, setBreedId] = useState("");
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("Rand");
  const { data: breeds = [], isLoading: breedsIsLoading } = useGetBreedsQuery();
  const {
    data: breedImages = [],
    isLoading: imagesIsLoading,
    refetch: refetchImages,
  } = useGetBreedImagesQuery({ breedId, limit, order });
  const [addFavourite] = useAddFavouriteMutation();

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleBreedId = (e) => {
    setBreedId(e.target.value);
  };

  const handleLimit = (e) => {
    setLimit(parseInt(e.target.value, 10));
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  const handleRefresh = () => {
    refetchImages();
  };

  const handleAddFavourite = (imageId) => {
    addFavourite(imageId);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />

        <div className={styles.wrapper}>
          <div className={styles.top}>
            <BackButton />
            <PageInfo active>GALLERY</PageInfo>
            <button className={styles["upload-btn"]} onClick={handleOpenModal}>
              <UploadIcon />
              <span>UPLOAD</span>
            </button>
          </div>

          <div className={styles["params-container"]}>
            <div className={styles["params-block"]}>
              <div className={styles["params-input"]}>
                <label htmlFor="order">ORDER</label>
                <select
                  name="order"
                  defaultValue="Random"
                  onChange={handleOrder}
                >
                  <option value="Rand">Random</option>
                  <option value="Desc">Desc</option>
                  <option value="Asc">Asc</option>
                </select>
              </div>

              <div className={styles["params-input"]}>
                <label htmlFor="type">TYPE</label>
                <select name="type" defaultValue="All">
                  <option value="All">All</option>
                  <option value="Static">Static</option>
                  <option value="Animated">Animated</option>
                </select>
              </div>
            </div>

            <div className={styles["params-block"]}>
              <div className={styles["params-input"]}>
                <label htmlFor="breed">BREED</label>
                <select name="breed" defaultValue="" onChange={handleBreedId}>
                  <option value="">None</option>
                  {!breedsIsLoading &&
                    breeds.map((breed) => (
                      <option key={breed.id} value={breed.id}>
                        {breed.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles["params-input"]}>
                <label htmlFor="limit">LIMIT</label>
                <select name="limit" defaultValue={5} onChange={handleLimit}>
                  <option value={5}>5 items per page</option>
                  <option value={10}>10 items per page</option>
                  <option value={15}>15 items per page</option>
                  <option value={20}>20 items per page</option>
                </select>
                <button onClick={handleRefresh}>
                  <ReloadIcon />
                </button>
              </div>
            </div>
          </div>

          {imagesIsLoading ? (
            <Spinner />
          ) : !breedImages.length ? (
            <Message>No items found</Message>
          ) : (
            <List
              type="favourites"
              images={breedImages.map((item) => ({
                url: item.url,
                id: item.id,
              }))}
              onClick={handleAddFavourite}
            />
          )}
        </div>
      </div>

      {modal && <UploadModal onClose={handleCloseModal} />}
    </>
  );
};

export default Gallery;
