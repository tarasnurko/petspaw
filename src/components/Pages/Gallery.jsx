import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import Header from "../Header/Header";
import BackButton from "../BackButton/BackButton";
import PageInfo from "../UI/PageInfo";
import { ReloadIcon, UploadIcon } from "../../assets";
import List from "../List/List";
import UploadModal from "../UploadModal/UploadModal";

const Gallery = () => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal ? (
        <UploadModal onClose={handleCloseModal} />
      ) : (
        <div className={styles.container}>
          <Header />

          <div className={styles.wrapper}>
            <div className={styles.top}>
              <BackButton />
              <PageInfo active>GALLERY</PageInfo>
              <button
                className={styles["upload-btn"]}
                onClick={handleOpenModal}
              >
                <UploadIcon />
                <span>UPLOAD</span>
              </button>
            </div>

            <div className={styles["params-container"]}>
              <div className={styles["params-block"]}>
                <div className={styles["params-input"]}>
                  <label htmlFor="order">ORDER</label>
                  <select name="order" defaultValue="Random">
                    <option value="Random">Random</option>
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
                  <select name="breed" defaultValue="None">
                    <option value="None">None</option>
                  </select>
                </div>

                <div className={styles["params-input"]}>
                  <label htmlFor="limit">LIMIT</label>
                  <select name="limit" defaultValue={5}>
                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={15}>15 items per page</option>
                    <option value={20}>20 items per page</option>
                  </select>
                  <button>
                    <ReloadIcon />
                  </button>
                </div>
              </div>
            </div>

            <List />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
