import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  CorrectIcon,
  CrossIcon,
  IncorrectIcon,
  SpinnerSmallIcon,
  UploadImage,
} from "../../assets";
import { useUploadImageMutation } from "../../features/api/apiSlice";
import Message from "../UI/Message";
import styles from "./UploadModal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [image, setImage] = useState();
  const [
    uploadImage,
    {
      isLoading: imageIsLoading,
      isSuccess: uploadIsSuccess,
      isError: uploadIsError,
    },
  ] = useUploadImageMutation();

  const onDropHandler = (e) => {
    e.preventDefault();
    const [image] = e.dataTransfer.files;
    let formData = new FormData();
    formData.append("image", image);
    setImage({
      url: URL.createObjectURL(image),
      name: image.name,
      file: formData,
    });
  };

  const uploadHandler = async () => {
    await uploadImage(image.file);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <button className={styles.close} onClick={props.onClose}>
          <CrossIcon />
        </button>
        <h2 className={styles.title}>Upload a .jpg or .png Cat Image</h2>
        <div className={styles.subtitle}>
          Any uploads must comply with the
          <a href="https://thecatapi.com/privacy"> upload guidelines</a> or face
          deletion.
        </div>
        <div className={styles["file-container"]}>
          <label
            accept=".jpg,.jpeg,.png"
            htmlFor="catImage"
            className={styles["file-wrapper"]}
            style={{ backgroundColor: `${uploadIsError ? "#FBE0DC" : ""}` }}
            onDragStart={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDropHandler}
          >
            {!image ? (
              <>
                <img
                  className={styles["file-bg"]}
                  src={UploadImage}
                  alt="upload"
                />
                <div className={styles["file-text"]}>
                  <span>Drag here</span> your file or <span>Click here</span> to
                  upload
                </div>
              </>
            ) : (
              <img className={styles["file-img"]} src={image.url} alt="img" />
            )}
          </label>
          <input
            type="file"
            name="catImage"
            id="catImage"
            accept=".jpg,.jpeg,.png"
          />
        </div>
        {!image ? (
          <div className={styles.text}>No file selected</div>
        ) : (
          <>
            <div className={styles.text}>Image File Name: {image.name}</div>
            {imageIsLoading ? (
              <button className={styles.upload} disabled>
                <SpinnerSmallIcon /> UPLOADING
              </button>
            ) : (
              <button className={styles.upload} onClick={uploadHandler}>
                UPLOAD PHOTO
              </button>
            )}
          </>
        )}
        <div className={styles["action-container"]}>
          {uploadIsSuccess ? (
            <Message action={<CorrectIcon />} white>
              Thanks for the Upload - Cat found!
            </Message>
          ) : uploadIsError ? (
            <Message action={<IncorrectIcon />} white>
              No Cat found - try a different one
            </Message>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

const UploadModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default UploadModal;
