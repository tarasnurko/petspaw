import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../assets";
import styles from "./BackButton.module.scss";

const BackButton = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={`${!darkMode ? styles.btn : `${styles.btn} ${styles.dark}`}`}
      onClick={handleClick}
    >
      <ArrowIcon />
    </button>
  );
};

export default BackButton;
